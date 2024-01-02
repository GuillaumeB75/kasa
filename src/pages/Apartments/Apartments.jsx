import React, { useEffect, useState } from "react";
import "./apartments.scss";
import Carroussel from "../../components/Carroussel/Carroussel";
import data from "../../assets/data/logements.json";
import { useParams, useNavigate } from "react-router-dom";

function Apartments() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [selectedHouse, setSelectedHouse] = useState(null);
  useEffect(() => {
    const datas = data.find((location) => location.id === id);

    if (!datas) {
      navigate("*");
    } else {
      setSelectedHouse(datas);
    }
  }, [id, navigate]);

  if (!selectedHouse) {
    return <div>Loading...</div>; // Display a loading message or a placeholder
  }

  return (
    <div className="house-hold">
      <Carroussel pictures={selectedHouse.pictures} />
    </div>
  );
}

export default Apartments;
