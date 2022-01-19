const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Tourism", {
    id: {
      // id de turismo
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, //genera el uuidv4
      allowNull: false,
      primaryKey: true,
    },
    name: {
      // nombre del turismo
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
      //dificultad del turismo
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    duration: {
      // duracion del turismo
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    season: {
      // temporada del turismo ej, invierno otoño , verano , primavera ect
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
