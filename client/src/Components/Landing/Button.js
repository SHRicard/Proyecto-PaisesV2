import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

const Button = () => {
  return (
    <>
      <Link to="/home/">
        <button className="buttonGoHome" type="button">
          <span className="spanBoxButton">Ingresar</span>
        </button>
      </Link>
    </>
  );
};

export default Button;
