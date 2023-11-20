import React from "react";
import "./footer.scss";
import logoForFooter from "../../assets/images/LOGO_footer.png";

function Footer() {
  return (
    <div className="footer">
      <div>
        <img
          src={logoForFooter}
          alt="logo blanc intitulé KASA avec une icone de maison à la place de la première lettre a"
          width="100"
        />
      </div>
      <div>© 2020 Kasa. All rights reserved</div>
    </div>
  );
}

export default Footer;
