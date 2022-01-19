import React, { useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card.js";
import "./AddFavorito.css";
import { getFavorito } from "../../Redux/Actions";

const AddFavorito = () => {
  let favoritos = useSelector((state) => state.favoritos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorito());
  }, [dispatch]);

  return (
    <div>
      <div className="boxAddFavorito">
        <div className="navarFavorito">
          <NavBar />
        </div>

        <div className="boxFavorito">
          <h1 className="titleFavorito">Pais Favoritos</h1>
          <div className="cardFavoritos">
            {favoritos?.map((favorito) => {
              return <Card key={favorito.id} props={favorito} />;
            })}
            {console.log(favoritos)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFavorito;
