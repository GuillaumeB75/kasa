import React from "react";
import Banner from "../../components/Banner/Banner";
import backgroundImage from "../../assets/images/banniere_home.png";

function Home() {
  return (
    <div className="test">
      <Banner backgroundImage={backgroundImage} />
      <h1>home</h1>
      
    </div>
  );
}

export default Home;