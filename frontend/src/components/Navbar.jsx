import React from "react";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

function Navbar() {
  return (
    <div className=" fixed w-full text-white flex justify-between p-4 items-center">
      <div className="text-2xl font-bold text-center uppercase">
        <h1>
          Le<span className="block text-4xl">logo</span>
        </h1>
      </div>
      <nav>
        <div className="">
          <MenuOutlinedIcon />
        </div>
        <ul className="hidden md:flex gap-8 p-6 uppercase bg-white/10">
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
        <MenuItems />
      </nav>
    </div>
  );
}

export default Navbar;
