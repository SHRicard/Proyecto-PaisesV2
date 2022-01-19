import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setQuerySearch } from "../../Redux/Actions";
import "./SearchBar.css";

const SearchBar = () => {
  const [search, setSearch] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setQuerySearch(search));
  }, [search, dispatch]);

  function onChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="SearchBox">
      <input
        className="textSarchBox"
        type="text"
        onChange={onChange}
        value={search}
        placeholder="Busca tu pais aca..."
      />
      <button className="SearchBox2" type="button">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
