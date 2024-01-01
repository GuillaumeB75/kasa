import React from "react";
import "./Banner.scss";

function Banner({ backgroundImage, title }) {
    return (
        <div className="banner">
            <img src={backgroundImage} alt="panoramas de nature sauvage" />
            <div className="title">{title}</div>
        </div>
    );
}

export default Banner;
