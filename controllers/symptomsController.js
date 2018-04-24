const db = require('../models');

// Defining methods for the symptomsController
module.exports = {
  findAll: function (req, res) {
    db.SymptomJournal
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create(req, res) {
    db.SymptomJournal
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
