const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Score
      .findAll({})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },
  create: function (req, res) {
    db.Score
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  }
}