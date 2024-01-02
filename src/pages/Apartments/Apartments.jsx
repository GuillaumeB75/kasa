import React, { useEffect, useState } from "react";
import "./apartments.scss";
import Carroussel from "../../components/Carroussel/Carroussel";
import Collapse from "../../components/Collapse/Collapse";
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
      <Collapse title="Description" content={selectedApartment.description} />
    </div>
  );
}

export default Apartments;
