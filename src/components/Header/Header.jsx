import React from "react";
import "./header.scss";
import { NavLink } from 'react-router-dom';
import logoForHeader from "../../assets/images/LOGO_header.png";

function Header() {
  return (
    <nav className="header">
      <div className="header_logo">
        <img
          src={logoForHeader}
          alt="logo rouge rosé intitulé KASA avec une icone de maison à la place de la première lettre a"
        />
      </div>
      <NavLink to="/">
        <div>Accueil</div>
      </NavLink>
      <NavLink to="/about">
        <div>A propos</div>
      </NavLink>
    </nav>
  );
}

export default Header;
