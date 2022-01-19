import React from "react";
import Node from "./Node.png";
import ReacT from "./React.png";
import Redux from "./Redux.png";
import Sequelize from "./sequelize.png";
import Css from "./Css.png";
import JavaScript from "./JavaScript.png";
import Programando from "./Programando.png";
import Github from "./github.png";
import Links from "./Link.png";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar.js";

import "./About.css";
const About = () => {
  return (
    <>
      <div className="boxNavBarBox">
        <NavBar />
      </div>
      <div className="boxContainerAbout">
        <div className="boxAbout">
          <div className="boxInfoApp">
            <h1>Pi-Country Soy Henry</h1>
            <h3>Objetivos del Proyecto </h3>

            <p>
              Construir una App utlizando React, Redux, Node y Sequelize.
              Afirmar y conectar los conceptos aprendidos en la carrera.
              Aprender mejores prácticas. Aprender y practicar el workflow de
              GIT. Usar y practicar testing.
            </p>
            <div className="boxImgTecno">
              <img className="Node" src={Node} alt="no img" />
              <img className="ReacT" src={ReacT} alt="no img" />
              <img className="Redux" src={Redux} alt="no img" />
              <img className="Sequelize" src={Sequelize} alt="no img" />
              <img className="JavaScript" src={JavaScript} alt="no img" />
              <img className="Css" src={Css} alt="no img" />
            </div>
          </div>
          <div className="boxProgImg">
            <img className="progra" src={Programando} alt="no img" />
          </div>
          <div className="sCi">
            <li>
              <a href="https://github.com/SHRicard">
                <img className="redSci" src={Github} alt="no img" />
              </a>
            </li>
            <li>
              <img className="redSci" src={Links} alt="no img" />
            </li>
          </div>
        </div>
        <div className="copy">
          Copyright © Todos los derechos reservados App Country
        </div>
      </div>
    </>
  );
};

export default About;
