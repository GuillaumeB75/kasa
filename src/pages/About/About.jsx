import React from "react";
import Banner from "../../components/Banner/Banner";
import backgroundImage from "../../assets/images/banniere_about.png";


function About() {
  return (
    <div className="about">
      <Banner backgroundImage={backgroundImage} />
      <h1>a propos</h1>
      
    </div>
  );
}

export default About;