import React from "react";
import Banner from "../../components/Banner/Banner";
import backgroundImage from "../../assets/images/banniere_about.png";
import Collapse from "../../components/Collapse/Collapse";
import about from "../../assets/data/about.json";

function About() {
  return (
    <>
      <Banner backgroundImage={backgroundImage} />
      <div className="about">
        {about.map((house) => (
          <Collapse
            key={house.id}
            title={house.title}
            content={house.description}
          />
        ))}
      </div>
    </>
  );
}

export default About;
