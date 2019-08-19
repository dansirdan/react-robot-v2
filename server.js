const express = require("express");
const bodyParser = require('body-parser');
const path = require("path");
const routes = require("./routes");
require("dotenv").config();

const PORT = process.env.PORT || 3001;
const db = require("./models");

const app = express();

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

// Define API routes here
app.use(routes);

const syncOptions = {
  force: true
};

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// db.sequelize.sync(syncOptions).then(function () {
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
// });
