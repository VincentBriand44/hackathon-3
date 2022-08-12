import React from "react";
import frame00 from "../../assets/img-pendu/pendu00.png";
import frame01 from "../../assets/img-pendu/frame-01.gif";
import frame02 from "../../assets/img-pendu/frame-02.gif";
import frame03 from "../../assets/img-pendu/frame-03.gif";
import frame04 from "../../assets/img-pendu/frame-04.gif";
import frame05 from "../../assets/img-pendu/frame-05.gif";
import frame06 from "../../assets/img-pendu/frame-06.gif";
import frame07 from "../../assets/img-pendu/pendu07.gif";

function Figure({ wrongLetters }) {
  const errors = wrongLetters.length;
  const images = [
    frame00,
    frame01,
    frame02,
    frame03,
    frame04,
    frame05,
    frame06,
    frame07,
  ];
  return (
    <div className="xl:w-2/4 sm: flex flex-col items-center justify-center">
      {errors > 0 && errors <= 1 ? (
        <img className="rounded-full" src={images[1]} alt="img" />
      ) : null}

      {errors > 1 && errors <= 2 ? (
        <img className="rounded-full" src={images[2]} alt="img" />
      ) : null}

      {errors > 2 && errors <= 3 ? (
        <img className="rounded-full" src={images[3]} alt="img" />
      ) : null}

      {errors > 3 && errors <= 4 ? (
        <img className="rounded-full" src={images[4]} alt="img" />
      ) : null}
      {errors > 4 && errors <= 5 ? (
        <img className="rounded-full" src={images[5]} alt="img" />
      ) : null}

      {errors > 5 && errors <= 6 ? (
        <img className="rounded-full" src={images[6]} alt="img" />
      ) : null}
      {errors === 7 && (
        <img className="rounded-full" src={images[7]} alt="img" />
      )}
    </div>
  );
}

export default Figure;
