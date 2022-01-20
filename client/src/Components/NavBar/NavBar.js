import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import bandera from "./bandera.gif";
// import { useLocation } from "react-router-dom";

const NavBar = () => {
  // const [path, setPath] = useState();
  // const location = useLocation();
  // useEffect(() => {
  //   setPath(location.pathname);
  //   console.log(path);
  // }, [path, location]);

  return (
    <div className="boxNar">
      <img className="bandera" src={bandera} alt="no img" />
      <ul>
        <li>
          <Link to="/home/">Home</Link>
        </li>
        <li>
          <Link to="/home/Favoritos">Favoritos</Link>
        </li>
        <li>
          <Link to="/home/Formulario">Formulario</Link>
        </li>
        <li>
          <Link to="/home/about">About</Link>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;
