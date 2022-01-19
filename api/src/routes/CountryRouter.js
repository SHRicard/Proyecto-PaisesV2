const { Op } = require("sequelize");
const { Router } = require("express");

const axios = require("axios");
const { Country, Tourism } = require("../db");

const router = Router();
////////////////trampa //////////////////// _
router.get("/searchID", async (req, res, next) => {
  try {
    let name = req.query.name;
    //me creo mi variable orde
    let orde;
    //pregunto si me pasan orde por query
    if (req.query.orde) {
      //dordenar por name
      orde = [["name", req.query.orde]];
    } // si no me pasan orde es null
    else orde = null;
    // creo mi variable pagina que arranca en 0 con un offset *10 (catida de resultado) con un limite de 10
    let pagina = req.query.pagina || 0;
    //busco en mi base de dato por  nombre con un findAndCountAll donde solo le pongo la coincidencia al final
    const search = await Country.findAndCountAll({
      where: {
        name: {
          [Op.iLike]: name + "%",
        },
      },

      order: orde,
      offset: pagina * 2,
      limit: 2,
    });
    res.status(201).send(search);
  } catch (err) {
    console.log(err);
    res.status(500).send("The country does not exist"); //El pais no existe
  }
});
/////////////////////////////////////////

router.post("/", async (req, res, next) => {
  try {
    let response = "Ya existe los paises";
    const existCountries = await Country.findAll();
    if (!existCountries.length) {
      const getCountries = await axios.get("https://restcountries.com/v3/all");
      const clearCountries = getCountries.data.map((country) => {
        const countryCurrents = [];
        for (const current in country.currencies) {
          countryCurrents.push(country.currencies[current].name);
        }
        let countryLenguages = [""];
        if (country.languages) {
          countryLenguages = Object.values(country.languages);
        }
        return {
          id: country.cca3,
          name: country.name.common,
          flag: country.flags[1],
          continents: country.continents,
          capital: country.capital,
          subregion: country.subregion,
          area: country.area,
          population: country.population,
          currencies: countryCurrents,
          languages: countryLenguages,
          timezones: country.timezones,
        };
      });
      const loadCountries = await Promise.all(
        clearCountries.map(async (country, index) => {
          const loadCountry = await Country.create(country);
        })
      );
      response = "Paises creados";
    }
    res.status(201).send(response);
  } catch (err) {
    res.status(500).send("Server internal error");
  }
});
///////////////////// busc, ordeno y pagino  por query////
/// http://localhost:3001/api/country/search?name=a&orde=asc&pagina=1
router.get("/search", async (req, res, next) => {
  try {
    let name = req.query.name;
    //me creo mi variable orde
    let orden;
    //pregunto si me pasan orde por query
    if (req.query.orden && req.query.tipoDeOrden) {
      //dordenar por name
      orden = [[req.query.tipoDeOrden, req.query.orden]];
    } // si no me pasan orde es null
    else orden = null;
    // creo mi variable pagina que arranca en 0 con un offset *10 (catida de resultado) con un limite de 10
    let pagina = req.query.pagina - 1 || 0;

    let subRegion;
    if (req.query.subRegion) {
      subRegion = req.query.subRegion;
    } else subRegion = null;

    //busco en mi base de dato por  nombre con un findAndCountAll donde solo le pongo la coincidencia al final
    let search;

    if (subRegion) {
      search = await Country.findAndCountAll({
        where: {
          name: {
            [Op.iLike]: name + "%",
          },
          subregion: subRegion,
        },

        order: orden,
        offset: pagina * 10,
        limit: 10,
      });
    } else
      search = await Country.findAndCountAll({
        where: {
          name: {
            [Op.iLike]: name + "%",
          },
        },

        order: orden,
        offset: pagina * 10,
        limit: 10,
      });

    res.status(201).send(search);
  } catch (err) {
    console.log(err);
    res.status(500).send("The country does not exist"); //El pais no existe
  }
});
////////////////////////////////////////////////////////////////
router.get("/", async (req, res, next) => {
  try {
    //creo mi varibale orde
    let orden;
    // si me pasan un order
    if (req.query.orden && req.query.tipoDeOrden) {
      //lo ordeno por nombre
      orden = [[req.query.tipoDeOrden, req.query.orden]];
    } //si no me pasan es null
    else orden = null;
    // creo mi paginado
    let pagina = req.query.pagina - 1 || 0;

    let subRegion;
    if (req.query.subRegion) {
      subRegion = req.query.subRegion;
    } else subRegion = null;

    let search;

    if (subRegion) {
      search = await Country.findAndCountAll({
        where: {
          subregion: subRegion,
        },
        order: orden,
        offset: pagina * 10,
        limit: 10,
      });
    } else
      search = await Country.findAndCountAll({
        order: orden,
        offset: pagina * 10,
        limit: 10,
      });

    res.status(201).send(search);
  } catch (err) {
    console.log(err);
    res.status(500).send("the country does not exist");
  }
});
////////////////////////////busque por idQuery//////////////

router.get("/:id", async (req, res, next) => {
  try {
    // include: Tourism,
    const { id } = req.params;
    const searchId = await Country.findByPk(id, { include: Tourism });
    res.status(200).send(searchId);
  } catch (err) {
    console.log(err);
    res.status(500).send("The country does not exist");
  }
});

////////////////////Favoritos get

router.get("/favoritos/all", async (req, res, next) => {
  try {
    // include: Tourism,

    const searchFavorite = await Country.findAll({
      where: { isFavorite: true },
      include: Tourism,
    });
    res.status(200).send(searchFavorite);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error al buscar favoritos");
  }
});
/////////////////////////////addFavorito

router.put("/favoritos/:id/:addRemove", async (req, res, next) => {
  try {
    // include: Tourism,

    const { id, addRemove } = req.params;
    const updateFavorito = await Country.update(
      { isFavorite: addRemove },
      {
        where: { id },
      }
    );
    res.status(200).send(updateFavorito);
  } catch (err) {
    console.log(err);
    res.status(500).send("no se Agrego a Favorito");
  }
});

router.delete("/", (req, res, next) => {
  res.send("soy un delete /Country");
});

module.exports = router;
