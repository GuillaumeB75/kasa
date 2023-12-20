import React from "react";
import { NavLink } from "react-router-dom";
import "./card.scss";

function Card(props) {
  return (
    <div>
      <div className="card">
        <NavLink
           to={{
            pathname: `/Apartments/${props.id}`,
            state: { flatId: props.id },
          }}>
          <img src={props.image} alt="" />
          <h2 className="card_title">{props.title}</h2>
        </NavLink>
      </div>
    </div>
  );
}

export default Card;
