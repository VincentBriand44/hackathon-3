import React from "react";

function Word({ selectedWord, correctLetters }) {
  return (
    <div className="font-semibold text-4xl text-white m-2 block">
      {selectedWord.split("").map((letter) => {
        return (
          <span className="text-yellow-500">
            {correctLetters.includes(letter) ? letter : ""}
          </span>
        );
      })}
    </div>
  );
}

export default Word;
