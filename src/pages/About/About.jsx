import React from "react";
import Banner from "../../components/Banner/Banner";
import backgroundImage from "../../assets/images/banniere_about.png";
import Collapse from "../../components/Collapse/Collapse";


function About() {
  return (
    <div className="about">
      <Banner backgroundImage={backgroundImage} />
      <Collapse />
      
      
    </div>
  );
}

export default About;