import React from "react";
import "./header.scss";
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
      <div className="">© 2020 Kasa. All rights reserved</div>
    </nav>
  );
}

export default Header;
