import React from "react";

function Pendu() {
  const word = "HANGMAN";
  const alphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const [correctGuesses, setCorrectGuesses] = useState([]);

  const maskedWord = word
    .split("")
    .map((letter) => (correctGuesses.includes(letter) ? letter : "_"))
    .join(" ");
  return (
    <div>
      <div>
        <p>{word.split("").fill("_").join(" ")}</p>
        {alphabets.map((alphabet, index) => (
          <button key={index}>{alphabet}</button>
        ))}
      </div>
    </div>
  );
}

export default Pendu;
