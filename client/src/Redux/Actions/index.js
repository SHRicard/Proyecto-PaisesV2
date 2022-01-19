import axios from "axios";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_DETAIL = "GET_DETAIL";
export const SEARCH_CONTRY = "SEARCH_CONTRY";
export const SEARCH_ID = "SEARCH_ID";
export const POST_CREATE = "POST_CREATE";
export const GET_TURISMO = "GET_TURISMO";
export const CAMBIO_DE_PAGINA = "CAMBIO_DE_PAGINA";
export const GET_FAVORITO = "GET_FAVORITO";

export function getAllCountries(props) {
  return async function (dispatch) {
    ///url?pagina={numeroDepagina}&order={ASD o DESC}
    let JsonCountries = await axios.get(
      "http://localhost:3001/api/country" + props
    );

    return dispatch({
      type: "GET_COUNTRIES",
      payload: JsonCountries.data,
    });
  };
}

export function getDetailsCountry(props) {
  return async function (dispatch) {
    let JsonGetDetails = await axios.get(
      `http://localhost:3001/api/country/${props}`
    );
    return dispatch({
      type: "GET_DETAIL",
      payload: JsonGetDetails.data,
    });
  };
}
export function searchCountry(search) {
  return async function (dispatch) {
    console.log({ search });
    let JsonSearh = await axios.get(
      "http://localhost:3001/api/country/search?name=" + search
    );

    return dispatch({
      type: "SEARCH_CONTRY",
      payload: JsonSearh.data,
    });
  };
}
////////////////////seo el parametro de busqueda
export function setQuerySearch(search) {
  return function (dispatch) {
    return dispatch({
      type: "QUERY_PARAMS",
      payload: search,
    });
  };
}

export function searchID(buscarID) {
  return async function (dispatch) {
    let JsonSearh = await axios.get(
      "http://localhost:3001/api/country/searchID?name=" + buscarID
    );
    // console.log({ JsonSearh: JsonSearh.data });
    return dispatch({
      type: "SEARCH_ID",
      payload: JsonSearh.data,
    });
  };
}

export function postCreateTourism(props) {
  return async function (dispatch) {
    const JsonCreate = await axios.post(
      "http://localhost:3001/api/tourism/",
      props
    );
    // console.log({JsonCreate: JsonCreate.data});
    return dispatch({
      type: "POST_CREATE",
      payload: JsonCreate.data,
    });
  };
}

export function cambioDePagina(props) {
  return function (dispatch) {
    return dispatch({
      type: "CAMBIO_DE_PAGINA",
      payload: props,
    });
  };
}
///favoritos agregar
export function addFavorito(props) {
  return function () {
    axios.put(
      `http://localhost:3001/api/country/favoritos/${props.id}/${props.addRemove}`
    );
    return;
  };
}
export function getFavorito() {
  return async function (dispatch) {
    const jsonGetFavorito = await axios.get(
      "http://localhost:3001/api/country/favoritos/all"
    );
    // console.log({JsonCreate: JsonCreate.data});

    return dispatch({
      type: "GET_FAVORITO",
      payload: jsonGetFavorito.data,
    });
  };
}
