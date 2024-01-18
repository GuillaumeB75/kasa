import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Apartments from "../pages/Apartments/Apartments";
import About from "../pages/About/About";
import Error from "../pages/Error/Error";

const RoutesDefinition = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Apartments/:id" element={<Apartments />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default RoutesDefinition;
