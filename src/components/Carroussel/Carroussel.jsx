import React from "react";
import "./carroussel.scss";
import { useState } from "react";

function Carroussel(props) {
  const pictures = props.pictures;
  const [currentPicture, setCurrentPicture] = useState(0);

  const getClassName = (index) => {
    if (index === currentPicture) return "show";

    return "";
  };

  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length);
  };

  const moveToPrevious = () => {
    const indexPicture = currentPicture - 1;
    if (indexPicture < 0) {
      setCurrentPicture(pictures.length - 1);
      return;
    }
    setCurrentPicture((currentPicture - 1) % pictures.length);
  };
  const arePictures = () => {
    return pictures && pictures.length > 1;
  };

  return (
    <div className="houseCover">
      <div className="image__box">
        {pictures.map((pics, index) => (
          <img
            key={pics}
            src={pics}
            alt="Appartements"
            className={getClassName(index)}
          />
        ))}
      </div>

      {arePictures() && (
        <>
          <button className="btn__next" onClick={moveToPrevious}>
            <i className="fa-sharp fa-solid fa-chevron-left"></i>
          </button>
          <span className="img__count">
            {" "}
            {currentPicture + 1} / {pictures.length}{" "}
          </span>
          <button className="btn__previous" onClick={moveToNext}>
            <i className="fa-sharp fa-solid fa-chevron-right"></i>
          </button>{" "}
        </>
      )}
    </div>
  );
}

export default Carroussel;
