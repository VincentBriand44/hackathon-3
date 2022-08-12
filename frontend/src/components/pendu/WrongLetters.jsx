import React from "react";

function WrongLetters({ wrongLetters }) {
  return (
    <div className="p-4">
      <div className="font-semibold text-xl text-white my-2 py-2">
        {wrongLetters.length > 0 && (
          <p className="p-4">
            Mauvais...y a un soupçon d'infiltration dans notre groupe
          </p>
        )}
        <p>
          {wrongLetters
            .map((letter) => (
              <span className=" text-3xl text-red-500 mx-2">{letter}</span>
            ))
            .reduce(
              (prev, curr) => (prev === null ? [curr] : [prev, " - ", curr]),
              null
            )}
        </p>
      </div>
    </div>
  );
}

export default WrongLetters;
