import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import RoutesDefinition from "./routes/RoutesConfiguration";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    
    <Router>
    <Header />
      <RoutesDefinition />
    </Router>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
