const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Country", {
    id: {
      // Id del Pais
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      //Nombre del pais
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag: {
      //Bandera del pais
      type: DataTypes.STRING,
    },
    continents: {
      // continente del pais
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    capital: {
      //capitaldel pais
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    subregion: {
      // subregion del pais
      type: DataTypes.STRING,
    },
    area: {
      // area del pais
      type: DataTypes.REAL,
    },
    population: {
      // cantida de poblacion del pais
      type: DataTypes.REAL,
    },
    currencies: {
      // nombre de Moneda del pais
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    languages: {
      // Idioma  del pais
      type: DataTypes.ARRAY(DataTypes.STRING),
    },

    timezones: {
      //Horario del pais
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    isFavorite: {
      //Horario del pais
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
};
