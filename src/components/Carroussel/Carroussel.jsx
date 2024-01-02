import React from "react";
import "./carroussel.scss";
import { useState } from "react";

// Fonction composant Carroussel
function Carroussel(props) {
  // je récupère des images passées en props
  const pictures = props.pictures;
  // Utilisation de useState pour suivre l'image actuelle
  const [currentPicture, setCurrentPicture] = useState(0);

  // Fonction pour obtenir la classe CSS en fonction de l'index de l'image
  const getClassName = (index) => {
    // Si l'index correspond à l'image actuelle, retourner 'show'
    if (index === currentPicture) return "show";

    return "";
  };

  // je passe à l'image suivante
  const moveToNext = () => {
    // je mets à jour l'image actuelle en passant à la suivante
    setCurrentPicture((currentPicture + 1) % pictures.length);
  };

  // Fonction pour revenir à l'image précédente
  const moveToPrevious = () => {
    const indexPicture = currentPicture - 1;
    // Si l'index est inférieur à 0, je passe à la dernière image
    if (indexPicture < 0) {
      setCurrentPicture(pictures.length - 1);
      return;
    }
    // Sinon je passe à l'image précédente
    setCurrentPicture((currentPicture - 1) % pictures.length);
  };
  // je vérifie s'il y a plusieurs images
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

      {/* si plusieurs images j'affiche les boutons */}
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
