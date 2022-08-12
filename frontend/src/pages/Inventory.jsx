import { useContext } from "react";
import InventoryContext from "../context/InventoryContext";

function Inventory() {
  const { inventory } = useContext(InventoryContext);

  console.warn({ inventory });
  return (
    <div className="grid justify-center grid-cols-3">
      {inventory.map((item) => (
        <div
          key={item.id}
          className="p-8 m-4 text-center bg-slate-800 rounded-xl hover:bg-slate-900"
        >
          {item.title}
        </div>
      ))}
    </div>
  );
}

export default Inventory;
