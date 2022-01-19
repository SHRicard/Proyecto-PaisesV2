const { Router } = require("express");
const axios = require("axios");
const { Country, Tourism, Country_Tourism } = require("../db");

const router = Router();
//////Me traigo todo los turimos////////////////////
router.get("/", async (req, res, next) => {
  try {
    const allTourism = await Tourism.findAll({
      include: Country,
    });
    res.status(201).send(allTourism);
  } catch (err) {
    res.status(500).send("Server internal error");
  }
});

///////////////Creo el turismo ///////////////

router.post("/", async (req, res, next) => {
  try {
    // datos que pido por body
    console.log(req.body);
    const { name, difficulty, duration, season, CountryId } = req.body;

    const newTourism = await Tourism.create({
      name,
      difficulty,
      duration,
      season,
    });

    // await newTourism.addCountry(CountryId);

    const upDataCountries_Tourism = await Promise.all(
      CountryId.map(async (Country) => {
        //para guardar el id de country con el metodo findOne
        await newTourism.addCountry(Country);
      })
    );

    res.status(201).send("New tourism created");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server internal error");
  }
});

/////////////////////update//////////////////
router.put("/", async (req, res, next) => {
  try {
    //datos para actualizar
    const { name, difficulty, duration, season, TourismId } = req.body;
    //machear el id de turismo
    const oneUpDataTourism = await Tourism.findOne({
      where: {
        id: TourismId,
      },
    });
    //si el id del turismo no existe tiro el error
    if (!oneUpDataTourism) {
      res.status(400).send({
        status: "error",
        message: `Tourism with id${TourismId} not found`,
      });
    }
    //comprobacion de datos existente para actualizar
    if (name) oneUpDataTourism.name = name;
    if (difficulty) oneUpDataTourism.difficulty = difficulty;
    if (duration) oneUpDataTourism.duration = duration;
    if (season) oneUpDataTourism.season = season;
    //creo la const para guardar los dato actualizado usando el metodo save
    const upDataTourism = await oneUpDataTourism.save();
    //si upDataTourism no existe mando el error
    if (!upDataTourism) {
      res.status(400).send({
        status: "error",
        message: `Tourism with id${TourismId} failed update`,
      });
    }
    //para cambiar el pais hay q borrar la referencia (relaccion)
    // if (CountriesIds.length) {
    //   const deleteCountry_Tourism = await Country_Tourism.destroy({
    //     where: { TourismId },
    //   });

    //   const upDataCountries_Tourism = await Promise.all(
    //     CountriesIds.map(async (CountryId) => {
    //       //para guardar el id de country con el metodo findOne
    //       const existCountry = await Country.findOne({
    //         where: {
    //           id: CountryId,
    //         },
    //       });

    //       //id existCountry
    //       if (existCountry) {
    //         //creo la nueva relacion
    //         const updataCoutry_Tourism = await Country_Tourism.create({
    //           TourismId,
    //           CountryId,
    //         });
    //       }
    //     })
    //   );
    // }

    res.status(200).send({
      status: "success",
      data: upDataTourism,
    });
  } catch (err) {
    console.log(err);
  }
});

///////////////////por id/////////////////////
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const turismoId = await Tourism.findByPk(id);

    res.status(200).send(turismoId);
  } catch (err) {
    console.log(err);
    res.status(500).send("No");
  }
});
///////////////////////ruta 2

/////////////////borrar un turismo/////////////
router.delete("/:id", (req, res, next) => {
  try {
    //dato por body id para borrar
    const { id } = req.params;

    const deleteTourism = Tourism.destroy({
      where: { id },
    });
    res.send("Tourism delete");
  } catch (err) {
    res.status(500).send("Server internal Tourism not delete");
  }
});

module.exports = router;
