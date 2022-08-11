import { useState } from "react";
import * as Icon from "react-feather";
import { Link } from "react-router-dom";
import logo from "../assets/logo.mp4";
import MenuItems from "./MenuItems";

function Navbar() {
  const [active, setActive] = useState(false);
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
        <ul className="hidden gap-8 p-6 uppercase md:flex bg-white/10 rounded-3xl">
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
        <MenuItems showMenu={showMenu} active={active} />
      </nav>
    </div>
  );
}

export default Navbar;
