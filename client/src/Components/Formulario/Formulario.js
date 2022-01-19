import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { postCreateTourism, searchID } from "../../Redux/Actions";
import NavBar from "../NavBar/NavBar.js";
import MinCard from "../MinCard/MinCard.js";
import BuscadorId from "../BuscadoID/BuscadorID.js";
import "./Formulario.css";

const Formulario = () => {
  let dataID = useSelector((state) => state.countries);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchID());
  }, [dispatch]);
  /////////////////////////Estados que USO//////////////////
  let [name, setName] = useState("");
  let [CountryId, setCountryId] = useState([]);
  let [season, setSeason] = useState("");
  let [duration, setDuration] = useState(1);
  let [difficulty, setDifficulty] = useState(1);
  ////////////////////////////////fin////////////////////////////////////////
  ////////////////////Estados de Error////////////////////////////////////
  let [error, setError] = useState({
    name: "",
    CountryId: [],
    season: "",
    duration: 1,
    difficulty: 1,
  });

  ////////////////////////Funciones Chage///////////
  let handleNameChage = (e) => {
    setName(e.target.value);
    let objError = validateInput();
    setError(objError);
  };
  let handleCountryIdChage = (e) => {
    setCountryId(CountryId.filter((country) => country !== e).concat(e));
    let objError = validateInput();
    setError(objError);
  };
  ////////////////////funcion para borrar  id/////
  let handleCountryDelete = (id) => {
    let paisesRestante = CountryId.filter((country) => country !== id);
    setCountryId(paisesRestante);
    let objError = validateInput();
    setError(objError);
  };
  //////////////////////1fin////////////////////////////////
  let handleSeasonChage = (e) => {
    setSeason(e.target.value);
    let objError = validateInput();
    setError(objError);
  };
  let handleDurationChange = (e) => {
    setDuration(e.target.value);
    let objError = validateInput();
    setError(objError);
  };
  let handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
    let objError = validateInput();
    setError(objError);
  };

  //////////////////////////fin////////////////////////////////
  /////////////////////Validacion//////////////////
  function validateInput() {
    let ERROR = {};
    const tipoDeTemporada = ["verano", "otoño", "invierno", "primavera"];
    if (!name) {
      ERROR.name = "Se Necesita un nombre";
    } else if (name.length <= 3) {
      ERROR.name = "Tu nombre es muy Corto";
    }
    if (!CountryId || !CountryId.length) {
      ERROR.CountryId = "Se Necesita un Pais";
    }
    if (!season || !tipoDeTemporada.includes(season)) {
      ERROR.season = "Se necesita una Temporada";
    }
    // if (!duration) {
    //   ERROR.duration = "Se necesita una duracion";
    // }
    // if (!difficulty) {
    //   ERROR.difficulty = "Se necesita una dificultad";
    // }
    return ERROR;
  }
  ////////////////////////////////////////Funcion onSubmit ///////////////////////////
  const onSubmit = () => {
    if (
      (!error || error !== {}) &&
      name &&
      CountryId.length &&
      season &&
      duration &&
      difficulty
    ) {
      const newTurismo = { name, CountryId, season, duration, difficulty };
      dispatch(postCreateTourism(newTurismo));
      Swal.fire({
        //tiro alert de creado
        position: "center",
        icon: "success",
        title: "Enhorabuena",
        text: "Tu Activida fue creado!",
        footer: "<small>Revisa su card</small>",
        showConfirmButton: false,
        timer: 1700,
      });
      setName("");
      setCountryId([]);
      setSeason("");
      setDuration("");
      setDifficulty("");
      setError({
        name: "",
        CountryId: [],
        season: "",
        duration: 1,
        difficulty: 1,
      });
    } else {
      Swal.fire({
        //tiro alerta de error
        position: "center",
        icon: "error",
        title: "Error",
        text: "No se pudo crear tu Activida!",
        footer: "<small>Revisa tu formulario</small>",
        showConfirmButton: false,
        timer: 1700,
      });
    }
  };

  return (
    <div className="cajon">
      <form className="form">
        <div className="inputBox">
          {error.name && <div className="errorName">{error.name}</div>}
          <div className="divName">
            <h2 id="NameH2">Nombre</h2>
            <input
              placeholder="Crea Tu Actividad"
              className="inputName"
              type="text"
              id="name"
              name={"name"}
              value={name}
              onChange={handleNameChage}
            />
            {error.name && <div className="errorName">{error.name}</div>}
          </div>
          <div className="inputBzx">
            <h2 id="CountryIdH2">Paises Agregados</h2>
            {/* <input
              disabled="disabled"
              id={"CountryId"}
              placeholder="ID del Pais"
              type="text"
              name={"CountryId"}
              value={CountryId}
              onChange={handleCountryIdChage}
            /> */}
            {/* {error.CountryId ? (
              <div className="errorPais">{error.CountryId}</div>
            ) : (
              !error.CountryId
            )} */}
            {error.CountryId && (
              <div className="errorPais">{error.CountryId}</div>
            )}
            <div className="agregarPais">
              {CountryId?.map((id) => {
                return (
                  <span
                    className="spanCountry"
                    onClick={() => handleCountryDelete(id)}
                  >
                    {id}
                  </span>
                );
              })}
            </div>
          </div>
          <h2 id="seansoH2">Agrega tu Temporada</h2>
          <div className="inputBox">
            <select
              className="inputTemporada"
              id="seanso"
              name={"season"}
              value={season}
              onChange={handleSeasonChage}
            >
              <option value=""></option>
              <option value="verano">Verano</option>
              <option value="otoño">Otoño</option>
              <option value="invierno">Invierno</option>
              <option value="primavera">Primavera</option>
            </select>
            {error.season && <div className="errorSeanso">{error.season}</div>}
          </div>
          <div className="inputBzx">
            <h2 id="duration">Agrega La Duration</h2>
            <input
              className="inputDuracion"
              type="range"
              min={1}
              max={30}
              name={"duration"}
              value={duration}
              onChange={handleDurationChange}
            />
            <h1 id="valueDuration">{duration}</h1>

            {/* {error.duration && (
              <div className="errorDuracion">{error.duration}</div>
            )} */}
          </div>
          <div className="inputBzx">
            <h2 id="formDificuta">Agrega la Dificulta</h2>
            <input
              className="dificultad"
              type="range"
              min={1}
              max={5}
              id="difficulty"
              name={"difficulty"}
              value={difficulty}
              onChange={handleDifficultyChange}
            />

            <h1 id="valueDificulti">{difficulty}</h1>
          </div>
          {/* {error.difficulty && (
            <div className="errorDificultad">{error.difficulty}</div>
          )} */}
          <div>
            <button
              id="onSumitButton"
              type="button"
              className="formSumit"
              onClick={() => onSubmit()}
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
      <div className="Nabar">
        <NavBar />
      </div>
      <BuscadorId />
      <div className="minCardsV2">
        {dataID?.rows?.map((turismo) => {
          return (
            <MinCard
              onclick={handleCountryIdChage}
              className="BuscadoCardsIDRI"
              key={turismo.id}
              props={turismo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Formulario;
