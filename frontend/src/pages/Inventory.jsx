import { useContext } from "react";
import { NavLink } from "react-router-dom";
import InventoryContext from "../context/InventoryContext";

function Inventory() {
  const { inventory } = useContext(InventoryContext);

  console.warn({ inventory });
  return (
    <>
      <h1 className="mb-4 text-2xl font-bold text-center">Inventaire</h1>
      <div className="grid justify-center grid-cols-3">
        {inventory.map((item) => (
          <NavLink>
            <div
              key={item.id}
              className="p-8 m-4 text-center bg-slate-800 rounded-xl hover:bg-slate-900"
            >
              {item.title}
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default Inventory;
