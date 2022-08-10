import React, { useState } from "react";

import { Link } from "react-router-dom";

function MenuItems() {
  const [active, setActive] = useState(false);
  const showMenu = () => {};
  return (
    <div>
      <ul className="">
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
