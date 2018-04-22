const db = require('../models');

// Defining methods for the symptomsController
module.exports = {
  create(req, res) {
    db.SymptomJournal
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
