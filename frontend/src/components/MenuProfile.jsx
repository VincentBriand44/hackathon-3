import { openDB } from "idb";
import { useContext, useEffect, useState } from "react";
import { Button } from "react-daisyui";
import { NavLink } from "react-router-dom";

import InventoryContext from "../context/InventoryContext";

function MenuProfile({ isActive }) {
  const [itemsData, setItemsData] = useState([]);

  const { setInventory } = useContext(InventoryContext);

  const price = itemsData.reduce((acc, item) => acc + item.price, 0);

  useEffect(() => {
    let items = [];

    const loadData = async () => {
      const db = await openDB("scr", 1);
      const store = db.transaction("cart").objectStore("cart");

      let cursor = await store.openCursor();

      while (cursor) {
        items = [...items, cursor.value];
        // eslint-disable-next-line no-await-in-loop
        cursor = await cursor.continue();
      }

      setItemsData(items);
    };
    loadData();
  }, []);

  const handleDelete = async (id) => {
    const db = await openDB("scr", 1);
    const store = db.transaction("cart", "readwrite").objectStore("cart");
    await store.delete(id);
    setItemsData(itemsData.filter((item) => item.id !== id));
  };

  const handleClick = async () => {
    const db = await openDB("scr", 1);
    const store = db
      .transaction("inventory", "readwrite")
      .objectStore("inventory");
    const storeCart = db.transaction("cart", "readwrite").objectStore("cart");
    itemsData.map((item, index) =>
      store.add({
        id: index,
        title: item.title,
        price: item.price,
      })
    );
    setInventory(itemsData);
    itemsData.forEach((item) => storeCart.delete(item.id));
    setItemsData(() => []);
  };
  return (
    <div
      style={{ display: isActive ? "flex" : "none" }}
      className="absolute z-10 flex-col items-center hidden p-4 my-4 select-none rounded-xl right-4 bg-slate-800"
    >
      <h2 className="m-2 font-bold">Mon panier</h2>
      {itemsData.length > 0 ? (
        <>
          <ul>
            {itemsData.map((item, index) => (
              <li
                key={item.id}
                className={`flex items-center justify-between py-1 px-3 rounded-xl ${
                  !(index % 2) && "bg-slate-900/30"
                }`}
              >
                <p>
                  {item.title} ({item.price}€)
                </p>
                <span
                  onClick={() => handleDelete(item.id)}
                  aria-hidden
                  className="p-2 ml-2 leading-3 rounded-full hover:bg-slate-900 hover:text-red-600"
                >
                  X
                </span>
              </li>
            ))}
          </ul>
          <Button className="px-10 m-4" onClick={() => handleClick()}>
            Payer {price}€
          </Button>
        </>
      ) : (
        <p className="mx-4">Votre panier est actuellement vide</p>
      )}
      <NavLink to="/inventory">Accèder à mes produits</NavLink>
    </div>
  );
}

export default MenuProfile;
