import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchID, getAllCountries } from "../../Redux/Actions";

import "./BuscadorId.css";

const BuscadorId = () => {
  const [buscarID, setBuscarID] = useState();
  // const [buscarID, setBuscarID] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!setBuscarID) {
      dispatch(getAllCountries());
    } else {
      dispatch(searchID(buscarID));
    }
  }, [buscarID, dispatch]);

  function onchangeID(e) {
    setBuscarID(e.target.value);
  }

  return (
    <div className="BoxBuscadorIdCards">
      <input
        className="inputMinBuscador"
        type="text"
        placeholder="Nombre del Pais para el ID"
        onChange={onchangeID}
        value={buscarID}
      />
    </div>
  );
};

export default BuscadorId;
