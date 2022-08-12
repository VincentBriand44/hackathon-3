import React, { useEffect } from "react";
import { checkWin } from "./helpers/helpers";

function Popup({
  correctLetters,
  wrongLetters,
  selectedWord,
  setPlayable,
  playAgain,
}) {
  let finalMessage = "";
  let finalMessageRevealWord = "";
  let playable = true;

  if (checkWin(correctLetters, wrongLetters, selectedWord) === "win") {
    finalMessage = "Félicitations ! Tu as gagné et ça c'est bon signe ! 😃";
    playable = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === "lose") {
    finalMessage = "Malheureusement, vous avez perdu. 😕";
    finalMessageRevealWord = `...le mot était: ${selectedWord}`;
    playable = false;
  }

  useEffect(() => {
    setPlayable(playable);
  }, []);

  return (
    <div
      className="w-full lg:w-1/2 xl:w-5/12 px-4"
      style={finalMessage !== "" ? { display: "flex" } : {}}
    >
      <div className="font-semibold text-lg text-white m-2 block">
        <h2 className=" m-2 ">{finalMessage}</h2>
        <h3 className=" m-2 ">{finalMessageRevealWord}</h3>
        <button
          className="py-4 px-10 lg:px-8 xl:px-10 uppercase bg-white/10 hover:bg-white/80 rounded-3xl inline-flex items-center justify-center text-center text-white border-solid border-2 border-white-500 hover:text-black text-base hover:bg-opacity-90 font-normal"
          type="button"
          onClick={playAgain}
        >
          Jouer Again
        </button>
      </div>
    </div>
  );
}

export default Popup;
