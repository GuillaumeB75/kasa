import React, { useEffect, useState } from "react";
import "./apartments.scss";
import Carroussel from "../../components/Carroussel/Carroussel";
import Collapse from "../../components/Collapse/Collapse";
import Informations from "../../components/Informations/Informations";
import data from "../../assets/data/logements.json";
import { useParams, useNavigate } from "react-router-dom";

function Apartments() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [selectedApartment, setselectedApartment] = useState(null);
  useEffect(() => {
    const datas = data.find((location) => location.id === id);

    if (!datas) {
      navigate("*");
    } else {
      setselectedApartment(datas);
    }
  }, [id, navigate]);

  if (!selectedApartment) {
    return <div>Loading...</div>;
  }

  return (
    <div className="house-hold">
      <Carroussel pictures={selectedApartment.pictures} />
      <Informations selectedApartment={selectedApartment} />
      <div className="description_box">
        <Collapse title="Description" content={selectedApartment.description} />
        <Collapse
          title="Equipements"
          content={selectedApartment.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        />
      </div>
    </div>
  );
}

export default Apartments;
