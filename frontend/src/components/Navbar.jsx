import { useState } from "react";
import * as Icon from "react-feather";
import { User } from "react-feather";
import { Link } from "react-router-dom";
import logo from "../assets/logo.mp4";
import MenuItems from "./MenuItems";
import MenuProfile from "./MenuProfile";

function Navbar() {
  const [active, setActive] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };
  return (
    <div className="fixed flex items-center justify-between w-full p-4 text-white">
      <div className="overflow-hidden text-2xl font-bold text-center uppercase rounded-full">
        <video autoPlay muted loop width="100" height="100">
          <source src={logo} type="video/mp4" />
        </video>
      </div>
      <nav>
        <div className="absolute scale-150 right-6 md:hidden top-6">
          <Icon.AlignJustify
            size={32}
            onClick={showMenu}
            className="scale-150 cursor-pointer"
          />
        </div>
        <ul className="hidden gap-8 p-6 uppercase md:flex bg-slate-800/60 rounded-3xl backdrop-blur-sm">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="shop">Shop</Link>
          </li>
          <li>
            <Link to="pendu">L'epreuve</Link>
          </li>
          <li>
            <Link to="training">Brrrrrrr!</Link>
          </li>
          <li
            className="flex items-center justify-center h-full rounded-full aspect-square bg-slate-800 hover:bg-slate-900"
            onClick={() => setIsActive(!isActive)}
            aria-hidden="true"
          >
            <User />
          </li>
        </ul>
        <MenuProfile isActive={isActive} />
        <MenuItems showMenu={showMenu} active={active} />
      </nav>
    </div>
  );
}

export default Navbar;
