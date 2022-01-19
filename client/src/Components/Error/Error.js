import React from "react";
import "./Error.css";
import Homer from "./Homer.gif";
const Error = () => {
  return (
    <div className="error404">
      <h1>Error Country Not Found</h1>
      <img src={Homer} alt="no img" />
    </div>
  );
};

export default Error;
