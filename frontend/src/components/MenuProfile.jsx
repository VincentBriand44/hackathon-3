import { openDB } from "idb";
import { useContext } from "react";
import { Button } from "react-daisyui";
import { NavLink } from "react-router-dom";

import CartContext from "../context/CartContext";
import InventoryContext from "../context/InventoryContext";

function MenuProfile({ isActive }) {
  const { setInventory } = useContext(InventoryContext);
  const { cartData, setCartData } = useContext(CartContext);

  const price = cartData.reduce((acc, item) => acc + item.price, 0);

  const handleDelete = async (id) => {
    const db = await openDB("scr", 1);
    const store = db.transaction("cart", "readwrite").objectStore("cart");
    await store.delete(id);
    setCartData(cartData.filter((item) => item.id !== id));
  };

  const handleClick = async () => {
    const db = await openDB("scr", 1);
    const store = db
      .transaction("inventory", "readwrite")
      .objectStore("inventory");
    const storeCart = db.transaction("cart", "readwrite").objectStore("cart");
    cartData.map((item) =>
      store.add({
        title: item.title,
        price: item.price,
        link: item.link,
      })
    );
    setInventory(cartData);
    cartData.forEach((item) => storeCart.delete(item.id));
    setCartData(() => []);
  };
  return (
    <div
      style={{ display: isActive ? "flex" : "none" }}
      className="absolute z-10 flex-col items-center hidden p-4 my-4 select-none rounded-xl right-4 bg-slate-800"
    >
      <h2 className="m-2 font-bold">Mon panier</h2>
      {cartData.length > 0 ? (
        <>
          <ul>
            {cartData.map((item, index) => (
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
      <NavLink to="/inventory" className="text-blue-700">
        Accèder à mes produits
      </NavLink>
    </div>
  );
}

export default MenuProfile;
