import React from "react";
import "./error.scss";

function Error() {
  return (
    <div className="error_page">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <h3>Retourner sur la page d'accueil</h3>
    </div>
  );
}

export default Error;
