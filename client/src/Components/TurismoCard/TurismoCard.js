import React, { useState } from "react";
// import { upDataTourism } from "../../Redux/Actions";

import axios from "axios";
import useModel from "../Modal/useModel.js";
import Modal from "../Modal/Modal.js";
import Swal from "sweetalert2";
import "./TurismoCard.css";

const TurismoCard = ({ props, setRefresh, refesh }) => {
  const [isOpen1, openModal1, closeModal1] = useModel(false);
  ///////////////////////////ACTUALIZAR//////////////////////

  // let CountriesIds = props.Country_Tourism.CountryId;
  const [upData, setUpData] = useState({
    TourismId: props.id,
    name: "",
    season: "",
    duration: 1,
    difficulty: 1,
  });
  let [error, setError] = useState({
    name: "",
    season: "",
    duration: 1,
    difficulty: 1,
  });

  const upDataError = () => {
    setError({
      name: "",
      season: "",
      duration: 1,
      difficulty: 1,
    });

    let errores = 0;
    if (!upData.name) {
      setError((prevState) => {
        return {
          ...prevState,
          name: "Se requiere un nombre",
        };
      });
      errores += 1;
    } else if (upData.name.length < 3) {
      setError((prevState) => {
        return {
          ...prevState,
          name: "Nombre muy Corto",
        };
      });
      errores += 1;
    }
    if (!upData.season) {
      setError((prevState) => {
        return {
          ...prevState,
          seanson: "Se requiere una Temporada",
        };
      });
      errores += 1;
    }
    return errores;
  };

  const upDataInputChage = (e) => {
    setUpData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  // console.log(props.Country_Tourism.CountryId);

  const ActDataTurismo = async () => {
    try {
      // let goAct = upDataError();
      // if (!goAct) {
      const actualizador = await axios.put(
        "http://localhost:3001/api/tourism/"
      );

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Enhorabuena",
        text: "Tu Activida fue borrado!",
        footer: "<small>Sera redirecionado</small>",
        showConfirmButton: false,
        timer: 1700,
      });
    } catch (err) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Error",
        text: "No se pudo borrar tu Activida!",
        footer: "<small>Vuelve a intentarlo</small>",
        showConfirmButton: false,
        timer: 1700,
      });
    }
  };
  // console.log(ActDataTurismo);

  /////////////////////////////////ACTUALIZAR//////////////////////////////////////////////
  //////////////////////////////////////////////////

  let id = props.id;
  const borrarTurismo = async () => {
    try {
      const borrar = await axios.delete(
        "http://localhost:3001/api/tourism/" + id
      );

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Enhorabuena",
        text: "Tu Activida fue borrado!",
        footer: "<small>Sera redirecionado</small>",
        showConfirmButton: false,
        timer: 1700,
      });
      setRefresh(!refesh);
    } catch (err) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Error",
        text: "No se pudo borrar tu Activida!",
        footer: "<small>Vuelve a intentarlo</small>",
        showConfirmButton: false,
        timer: 1700,
      });
    }
  };

  return (
    <div className="boxCardTurismo">
      <div className="boxTurismo">
        <div className="boxTurismoCard">
          <div className="contentTurismo">
            <button id="borrarTurismo" onClick={() => borrarTurismo()}>
              X
            </button>
            <h2>Nombre : {props.name}</h2>
            <h3>Dificulta : {props.difficulty}</h3>
            <h3>Duracion : {props.duration}</h3>
            <h3>Temporada : {props.season}</h3>
            <h4>Id del Pais</h4>
            <h5>{props.id}</h5>
          </div>
        </div>
      </div>
      {/* /////////////////////////////////Model Actualiza ////////////////////////////// */}
      <button id="ActualizarTurismo" onClick={openModal1}>
        Actualizar
      </button>
      <Modal isOpen={isOpen1} closeModal={closeModal1}>
        <h2>{props.id}</h2>
        <h2>{props.Country_Tourism.CountryId}</h2>
        <from>
          <div>
            <label>Actualiza El nombre</label>
            {error.name && <p>{error.name}</p>}
            <input
              type="text"
              name="name"
              value={upData.name}
              onChange={upDataInputChage}
            ></input>
          </div>
          <div>
            <label>Actualiza Tu Temporada</label>
            {error.season && <h1>{error.season}</h1>}

            <select
              name="season"
              value={upData.season}
              onChange={upDataInputChage}
            >
              <option>{null}</option>
              <option value="verano">Verano</option>
              <option value="otoño">Otoño</option>
              <option value="invierno">Invierno</option>
              <option value="primavera">Primavera</option>
            </select>
          </div>
          <div>
            <label>Actualiza La Duracion</label>
            {error.duration && <h1>{error.duration}</h1>}

            <input
              name="duration"
              type="range"
              min={1}
              max={30}
              value={upData.duration}
              onChange={upDataInputChage}
            >
              {/* {upData.duration} */}
            </input>
          </div>
          <div>
            <label>Actualiza La Dificulta</label>
            {error.difficulty && <h1>{error.difficulty}</h1>}

            <input
              name="difficulty"
              type="range"
              min={1}
              max={5}
              value={upData.difficulty}
              onChange={upDataInputChage}
            >
              {/* {upData.difficulty} */}
            </input>
          </div>
          <button type="button" onClick={() => ActDataTurismo()}>
            Enviar
          </button>
        </from>
      </Modal>
    </div>
  );
};

export default TurismoCard;
