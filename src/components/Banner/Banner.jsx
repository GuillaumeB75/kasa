import React from "react";
import "./Banner.scss";

function Banner({ backgroundImage}) {
    return (
        <div className="banner">
            <img src={backgroundImage} alt="panoramas de nature sauvage" />
        </div>
    );
}

export default Banner;