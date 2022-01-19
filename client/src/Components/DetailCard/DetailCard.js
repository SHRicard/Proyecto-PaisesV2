import React from "react";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailsCountry } from "../../Redux/Actions";
import NavBar from "../NavBar/NavBar.js";
import TurismoCard from "../TurismoCard/TurismoCard.js";
import ErrorTurismo from "../Error/ErrorTurismo.js";
import "./DetailCard.css";

const DetailCard = () => {
  const [refesh, setRefresh] = useState(false);
  const detailCountry = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  let { id } = useParams();
  // Moneda <p>{detailCountry.currencies}</p>
  useEffect(() => {
    dispatch(getDetailsCountry(id));
  }, [dispatch, id, refesh]);
  ///////////////////////Borrar un turismo////

  return (
    <div className="boxBat">
      <NavBar />
      <div className="boxCardsDetalle">
        <div className="boxImgDetail">
          <img src={detailCountry.flag} alt="no img" />
        </div>
        <div className="boxNameDetalle">
          <h1>{detailCountry.name}</h1>
        </div>
        <div className="boxIdDetalle">
          <h2>{detailCountry.id}</h2>
        </div>
        <div className="boxAllData">
          <h3 className="boxContinenete">Continents</h3>
          <p id="idContinente">
            {detailCountry.continents?.map((cont) => {
              return <h4>{cont}</h4>;
            })}
          </p>
          <h3 className="boxCapital">Capital</h3>
          <p id="IdCapital">
            {detailCountry.capital?.map((capi) => {
              return <h4>{capi}</h4>;
            })}
          </p>
          <h3 className="boxRegion">Subregion</h3>
          <p id="idSubRegion">{detailCountry.subregion}</p>
          <h3 className="boxArea">Area</h3>
          <p id="idArea">{detailCountry.area}</p>
          <h3 className="boxPopulation">Population</h3>
          <p id="idPoblacion">{detailCountry.population}</p>
          <h3 className="boxCurrencies">Currencies</h3>
          <p id="idPeso">
            {detailCountry.currencies?.map((peso) => {
              return <h4>{peso}</h4>;
            })}
          </p>
        </div>
        <div>
          <h1 className="languages">Languages</h1>

          {detailCountry?.languages?.map((legua) => {
            return <h3 id="idLanguages">{legua}</h3>;
          })}
        </div>

        <div className="timeZones">
          <h2 id="idTimeZone">Timezones</h2>
          <p>{detailCountry.timezones}</p>
        </div>
      </div>
      <div className="turismo">
        {detailCountry?.Tourisms?.map((props) => {
          return (
            <TurismoCard
              setRefresh={setRefresh}
              refesh={refesh}
              key={props.id}
              props={props}
            />
          );
        })}
        {/* {console.log(
          detailCountry?.Tourisms?.map((props) => {
            return props;
          })
        )} */}
        {!detailCountry?.Tourisms?.length && (
          <div>
            <ErrorTurismo />
          </div>
        )}
      </div>

      <Link className="atrasButton" to="/home">
        <button className="buttonAtras">Atras</button>
      </Link>
    </div>
  );
};
export default DetailCard;
