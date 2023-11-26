import React from "react";
import { Routes, Route } from "react-router-dom";
import Test3 from "../pages/Home/Home";
import Test1 from "../pages/Apartments/Apartments";
import About from "../pages/About/About";
import Error from "../pages/Error/Error";

const RoutesDefinition = () => {
  return (
    <Routes>
      <Route path="/" element={<Test3 />} />
      <Route path="/" element={<Test1 />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default RoutesDefinition;
