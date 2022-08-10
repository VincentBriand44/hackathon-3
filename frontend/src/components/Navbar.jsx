import { Link } from "react-router-dom";
import React, { useState } from "react";
import * as Icon from "react-feather";
import MenuItems from "./MenuItems";

function Navbar() {
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };
  return (
    <div className=" fixed w-full text-white flex justify-between p-4 items-center">
      <div className="text-2xl font-bold text-center uppercase">
        <h1>
          Le<span className="block text-4xl">logo</span>
        </h1>
      </div>
      <nav>
        <div className="absolute right-6 md:hidden top-6 scale-150">
          <Icon.AlignJustify
            size={32}
            onClick={showMenu}
            className="scale-150 cursor-pointer"
          />
        </div>
        <ul className="hidden md:flex gap-8 p-6 uppercase bg-white/10 rounded-3xl">
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
