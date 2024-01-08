import React, { useState } from "react";
import "./collapse.scss";

function Collapse ({ title, content }) {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!isOpen);

  return (
    <div className={`Collapse-section ${isOpen ? 'open' : ''}`}>
      <button className="Collapse-title" onClick={toggleOpen}>
        {title}
        <span className={`Collapse-icon fa-sharp fa-solid fa-chevron-up ${isOpen ? 'open' : ''}`}></span>
      </button>
      <div className="Collapse-content">{content}</div>
    </div>
  );
};


export default Collapse;
