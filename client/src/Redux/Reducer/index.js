const initialState = {
  countries: {},
  detail: {},
  numeroPagina: 1,
  paginaActual: 0,
  parametroDeBusqueda: "",
  favoritos: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    //Todo los paises
    case "GET_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
        numeroPagina: Math.ceil(action.payload.count / 10),
      };
    //Detalle del pais
    case "GET_DETAIL":
      return {
        ...state,
        detail: action.payload,
      };
    //busqueda search
    //usa el stado de country
    case "SEARCH_CONTRY":
      return {
        ...state,
        countries: action.payload,
        numeroPagina: Math.ceil(action.payload.count / 10),
      };
    //minii buscador de id

    case "SEARCH_ID":
      return {
        ...state,
        countries: action.payload,
      };
    //para cambiar de pagina
    case "CAMBIO_DE_PAGINA":
      return {
        ...state,
        paginaActual: action.payload,
      };
    // paso parametros
    case "QUERY_PARAMS":
      return {
        ...state,
        parametroDeBusqueda: action.payload,
      };
    /// favoritos
    case "GET_FAVORITO":
      return {
        ...state,
        favoritos: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
