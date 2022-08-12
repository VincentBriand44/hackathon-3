import React from "react";

function Biologie() {
  return (
    <div>
      <div>
        <h1 className="flex flex-col text-3xl lg:px-8 py-4 xl:px-10">
          Des croyances à l'ignorance
          <span className="py-4 text-black">Les informations</span>
        </h1>
        <div className="grid grid-cols-1 grid-rows-2 gap-4 md:grid-cols-2 grid-rows-1 ">
          <div className=" lg:px-8 py-4 xl:px-10">
            Actuellement plus que jamais, l’une des questions est de savoir
            quelles sont les compétences réelles de ceux qui prétendent décider
            pour tout le monde, limitant les libertés, notre liberté ! Ces
            pseudo-humains sont nos experts qui se réunissent pour résoudre un
            problème, ils tournent nos affaires dans tous les sens et ne
            trouvent que des solutions qui ne résolvent rien. Peu importent il
            faut satisfaire notre cerveau reptilien... coincidence... nous ne le
            pensont pas !
          </div>
          <div className="flex justify-center items-center md: px-4 py-2">
            <div className="bg-tc-gif w-full h-64 bg-cover bg-center flex items-center rounded-3xl "></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Biologie;
