import React from "react";
import "./ErrorTurismo.css";
import { Link } from "react-router-dom";

const ErrorTurismo = () => {
  return (
    <div className="boxSinturismo">
      <h1 className="sinTurismo">ACTUAL MENTE NO TENES TURISMO !</h1>

      <h2 id="idh2Error22">
        Podes crearlo haciendo Click en el siguiente botton!
      </h2>
      <button className="btnFormulario">
        <Link to="/home/Formulario">Formulario</Link>
      </button>
    </div>
  );
};

export default ErrorTurismo;
