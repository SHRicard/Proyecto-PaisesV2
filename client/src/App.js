import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home.js";
import Catalogue from "./Components/Catalogue/Catalogue.js";
import DetailCard from "./Components/DetailCard/DetailCard.js";
import Formulario from "./Components/Formulario/Formulario.js";
import AddFavorito from "./Components/AddFavorito/AddFavorito.js";
import About from "./Components/About/About.js";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/home/card" component={Catalogue} />
        <Route exact path="/home/Favoritos" component={AddFavorito} />
        <Route exact path="/home/Formulario" component={Formulario} />
        <Route exact path="/home/about" component={About} />
        <Route exact path="/home/:id" component={DetailCard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
