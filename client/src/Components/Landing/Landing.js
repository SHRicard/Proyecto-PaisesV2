import React from "react";
import Button from "./Button.js";
import "./Landing.css";
import img from "./henry.png";

const Landing = () => {
  return (
    <div className="LandingBox">
      <img className="logoHenry" src={img} alt="no img" />
      <h1 className="HenryPi">PI-Country</h1>
      <div className="boxButton">
        <Button />
      </div>
      <div className="ricardoBox">
        <h2>Ricardo A. Ramirez</h2>
      </div>
    </div>
  );
};

export default Landing;
