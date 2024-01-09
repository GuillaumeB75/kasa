import React from "react";
import "./informations.scss";

function Informations({ selectedApartment }) {
    const { title, location, tags, host, rating } = selectedApartment;
    const { name, picture } = host;
    const [firstName, lastName] = name.split(" ");

    return (
        <div className="apartment__header">
            <div className="apartment__title">
                <h1>{title}</h1>
                <h2>{location}</h2>

                <div className="apartment__tags">
                    {tags.map((tag, index) => (
                        <span key={index}>{tag}</span>
                    ))}
                </div>
            </div>

            <div className="apartment__owner">
                <div className="apartment__owner__details">
                    <h3>
                        <span>{firstName}</span>
                        <span>{lastName}</span>
                    </h3>

                    <div className="apartment__owner__badge">
                        <img src={picture} alt={`${firstName} ${lastName}`} />
                    </div>
                </div>

                <div className="apartment__owner__star">
                    {[1, 2, 3, 4, 5].map((star) => (
                         <i key={star} className={`fa-solid fa-star ${rating >= star ? "on" : ""}`}></i>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Informations;
