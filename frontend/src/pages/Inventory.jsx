import { openDB } from "idb";
import { useEffect, useState } from "react";

function Inventory() {
  const [itemsData, setItemsData] = useState([]);

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

      setItemsData(items);
    };
    loadData();
  }, []);
  return (
    <div>
      <ul>
        {itemsData.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Inventory;
