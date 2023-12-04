import React, { useState } from "react";
import "./collapse.scss";

const CollapseSection = ({ title, children }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!isOpen);

  return (
    <div className={`Collapse-section ${isOpen ? 'open' : ''}`}>
      <button className="Collapse-title" onClick={toggleOpen}>
        {title}
        <span className={`Collapse-icon ${isOpen ? 'open' : ''}`}>^</span>
      </button>
      <div className="Collapse-content">{children}</div>
    </div>
  );
};

const Collapse = () => {
  return (
    <div className="Collapse">
      <CollapseSection title="Fiabilité">
        Les annonces postées sur Kasa garantissent une fiabilité totale. Les
        photos sont conformes aux logements, et toutes les informations sont
        régulièrement vérifiées par nos équipes.
      </CollapseSection>
      <CollapseSection title="Respect">
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
        comportement discriminatoire ou de perturbation du voisinage entraînera
        une exclusion de notre plateforme.
      </CollapseSection>
      <CollapseSection title="Service">
        Nos équipes se tiennent à votre disposition pour vous fournir une
        expérience parfaite. N'hésitez pas à nous contacter si vous avez la
        moindre question.
      </CollapseSection>
      <CollapseSection title="Sécurité">
        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour
        les voyageurs, chaque logement correspond aux critères de sécurité
        établis par nos services. En laissant une note aussi bien à l'hôte qu'au
        locataire, cela permet à nos équipes de vérifier que les standards sont
        bien respectés. Nous organisons également des ateliers sur la sécurité
        domestique pour nos hôtes.
      </CollapseSection>
    </div>
  );
};

export default Collapse;
