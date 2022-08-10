import { Link } from "react-router-dom";
import * as Icon from "react-feather";

function MenuItems({ showMenu, active }) {
  return (
    <div>
      <ul
        className={
          active
            ? "flex-col flex items-center fixed inset-0 left-1/4 justify-center p-8 uppercase bg-black/40 backdrop-blur-lg gap-8 md:hidden"
            : "hidden"
        }
      >
        <Icon.X onClick={showMenu} className="cursor-pointer" />
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Informations</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Rien a foutre</Link>
        </li>
      </ul>
    </div>
  );
}

export default MenuItems;
