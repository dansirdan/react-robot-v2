const router = require("express").Router();
const scoreRoutes = require("./highScores");

router.use("/score", scoreRoutes);

module.exports = router;