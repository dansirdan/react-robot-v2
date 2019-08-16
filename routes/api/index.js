const router = require("express").Router();
const scoreRoutes = require("./highScores");

router.use("/highScores", scoreRoutes);

module.exports = router;