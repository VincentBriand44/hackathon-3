import { openDB } from "idb";
import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cartData, setCartData] = useState([]);

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

      setCartData(items);
    };
    loadData();
  }, []);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CartContext.Provider value={{ cartData, setCartData }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
