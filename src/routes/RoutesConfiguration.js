import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Apartments from "./pages/Apartments";
import About from "./pages/About";
import Error from "./pages/Error";

const RoutesDefinition = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Apartments />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default RoutesDefinition;
