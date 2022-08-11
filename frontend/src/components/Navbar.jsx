import { useState } from "react";
import * as Icon from "react-feather";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";
import MenuProfile from "./MenuProfile";

function Navbar() {
  const [active, setActive] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };
  return (
    <div className="fixed flex items-center justify-between w-full p-4 text-white ">
      <div className="text-2xl font-bold text-center uppercase">
        <h1>
          Le<span className="block text-4xl">logo</span>
        </h1>
      </div>
      <nav>
        <div className="absolute scale-150 right-6 md:hidden top-6">
          <Icon.AlignJustify
            size={32}
            onClick={showMenu}
            className="scale-150 cursor-pointer"
          />
        </div>
        <ul className="items-center hidden h-12 gap-6 p-1 pl-8 uppercase md:flex bg-white/10 rounded-3xl">
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
          <li
            className="h-full rounded-full aspect-square bg-slate-800"
            onClick={() => setIsActive(!isActive)}
            aria-hidden="true"
          />
        </ul>
        <MenuProfile isActive={isActive} />
        <MenuItems showMenu={showMenu} active={active} />
      </nav>
    </div>
  );
}

export default Navbar;
