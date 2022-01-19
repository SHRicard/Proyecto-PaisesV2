const { Router } = require("express");
const Country = require("./CountryRouter");
const Tourism = require("./TourismRouter");

const router = Router();

router.use("/country", Country);
router.use("/tourism", Tourism);

module.exports = router;
