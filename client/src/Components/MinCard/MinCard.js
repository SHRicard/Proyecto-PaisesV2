import React from "react";
import "./MinCard.css";
const MinCard = ({ props, onclick }) => {
  return (
    <div className="boxCardMin" onClick={() => onclick(props.id)}>
      <div className="cardMin">
        <div className="boxContentCardMin">
          <p>
            Este es el Id del Pais<h1>{props.id}</h1>
          </p>
          <p>
            Este es el Nombre del Pais<h1>{props.name}</h1>
          </p>
          <img src={props.flag} alt="no img" />
        </div>
      </div>
    </div>
  );
};

export default MinCard;
