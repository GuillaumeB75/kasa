import React from "react";
import Banner from "../../components/Banner/Banner";
import backgroundImage from "../../assets/images/banniere_home.png";
import "./home.scss";
import Gallery from "../../components/Gallery/Gallery";

function Home() {
  return (
    <div className="home_presentation">
      <Banner
        backgroundImage={backgroundImage}
        title="Chez vous, partout et ailleurs"
      />

      <Gallery />
    </div>
  );
}

export default Home;
