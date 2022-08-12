import React, { useState, useEffect } from "react";
import HeaderPendu from "./HeaderPendu";
import Figure from "./Figure";
import WrongLetters from "./WrongLetters";
import Word from "./Word";
import Popup from "./Popup";
import { checkWin } from "./helpers/helpers";

const words = [
  "reptilien",
  "humain",
  "alien",
  "schtroumpf",
  "thomas",
  "abdou",
  "loris",
];
let selectedWord = words[Math.floor(Math.random() * words.length)];
function Pendu() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            setShowNotification(showNotification);
          }
        } else if (!wrongLetters.includes(letter)) {
          setWrongLetters((currentLetters) => [...currentLetters, letter]);
        } else {
          setShowNotification(showNotification);
        }
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  const playAgain = () => {
    setPlayable(true);
    // Empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  };

  return (
    <>
      <HeaderPendu />
      {console.warn("setCorrectLetters: ", correctLetters)}
      {console.warn("selectedWord: ", selectedWord)}
      {console.warn("correctLetters: ", selectedWord)}

      <div className="relative p-8 m-4 h-auto flex flex-col items-center">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        checkWin={checkWin}
        playAgain={playAgain}
      />
      <div>{showNotification}</div>
    </>
  );
}

export default Pendu;
