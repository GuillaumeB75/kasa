import React from "react";
import Banner from "../../components/Banner/Banner";
import backgroundImage from "../../assets/images/banniere_home.png";
import "./home.scss";
import Gallery from "../../components/Gallery/Gallery";


function Home() {
  return (
    <div className="home_presentation">
      <Banner backgroundImage={backgroundImage} />
      <div className="home_title">
        <p>Chez vous, partout et ailleurs</p>
      </div>
      <Gallery />
      <h1>home</h1>
    </div>
  );
}

export default Home;
