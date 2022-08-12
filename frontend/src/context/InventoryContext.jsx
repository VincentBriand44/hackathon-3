import { openDB } from "idb";
import { createContext, useEffect, useState } from "react";

const InventoryContext = createContext();

export function InventoryContextProvider({ children }) {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    let items = [];

    const loadData = async () => {
      const db = await openDB("scr", 1);
      const store = db.transaction("inventory").objectStore("inventory");

      let cursor = await store.openCursor();

      while (cursor) {
        items = [...items, cursor.value];
        // eslint-disable-next-line no-await-in-loop
        cursor = await cursor.continue();
      }

      setInventory(items);
    };
    loadData();
  }, []);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <InventoryContext.Provider value={{ inventory, setInventory }}>
      {children}
    </InventoryContext.Provider>
  );
}

export default InventoryContext;
