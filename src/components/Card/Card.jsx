import React from "react";
import { NavLink } from "react-router-dom";

function Card(props) {
  return (
    <div>
      <div className="card">
        <NavLink
          to="/Test1">
          <img src={props.image} alt="" />
          <h2 className="card_title">{props.title}</h2>
        </NavLink>
      </div>
    </div>
  );
}

export default Card;
