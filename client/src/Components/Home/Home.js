import React from "react";

import Catalogue from "../Catalogue/Catalogue.js";
import NavBar from "../NavBar/NavBar.js";
import SearchBar from "../SearchBar/SearchBar.js";

import "./Home.css";

const Home = () => {
  return (
    <div className="homebox">
      <NavBar />
      <SearchBar />
      <Catalogue />
    </div>
  );
};

export default Home;
