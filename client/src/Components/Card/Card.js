import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFavorito } from "../../Redux/Actions";

import "./Card.css";

const Card = ({ props }) => {
  const dispatch = useDispatch();

  const [isFavorite, setIsFavorite] = useState(props.isFavorite);

  const addRemoveFavorite = (id) => {
    dispatch(addFavorito({ id, addRemove: !isFavorite }));
    setIsFavorite(!isFavorite);
    if (props.refresh === true || props.refresh === false) {
      props.setRefresh(!props.refresh);
    }
  };

  return (
    <div className="boxcard">
      <div className="card">
        <div className="boxContentCard">
          <h2>
            <small
              onClick={() => addRemoveFavorite(props.id)}
              className={`${isFavorite ? "isFavorite" : "addFavorite"}`}
            >
              ♥&nbsp;
            </small>
            {props.id}
          </h2>
          <h1>{props.name}</h1>
          <img src={props.flag} alt="no img" />
          <p>
            {props.continents.map((cont) => {
              return <strong>{cont}</strong>;
            })}
          </p>
          <a href={"/home/" + props.id}>Read More</a>
        </div>
      </div>
    </div>
  );
};

export default Card;

/////////////// API
