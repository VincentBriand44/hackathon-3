import React, { useState } from "react";

import Informations from "./variables/Informations";
import Techniques from "./variables/Techniques";
import Organisations from "./variables/Organisations";

function Section() {
  const [text, setText] = useState("info-component");

  return (
    <div className="flex justify-around uppercase bg-white/10 rounded-3xl mt-6 ">
      <div className=" m-4 rounded-3xl md:flex-col w-full ">
        <div className="">
          <button
            type="button"
            className="bg-black rounded-3xl py-4 px-10  uppercase font-extrabold  ml-12 mb-2"
            onClick={() => setText("info-component")}
          >
            Informations
          </button>
          <button
            type="button"
            className="bg-orange-700 rounded-3xl py-4 px-10  uppercase font-extrabold ml-16 mb-2"
            onClick={() => setText("tech-component")}
          >
            Techniques
          </button>

          <button
            type="button"
            className="bg-yellow-700 rounded-3xl py-4 px-10  uppercase font-extrabold ml-12"
            onClick={() => setText("orga-component")}
          >
            Organisations
          </button>
        </div>

        <div className="uppercase">
          {text === "info-component" && <Informations />}
          {text === "tech-component" && <Techniques />}
          {text === "orga-component" && <Organisations />}
        </div>
      </div>
    </div>
  );
}

export default Section;
