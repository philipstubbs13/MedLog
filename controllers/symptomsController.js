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
  findById: function (req, res) {
    db.SymptomJournal
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log('the findbyid symptomJournal is not working in symptomscontroller.js error: ' + err));
    //res.status(422).json(err));
  },
  update: function (req, res) {
    db.SymptomJournal
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log('the update symptomJournal is not working in symptomscontroller.js error: ' + err));
    //res.status(422).json(err));
  },
  remove: function (req, res) {
    db.SymptomJournal
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log('the remove symptomJournal is not working in symptomscontroller.js error: ' + err));
    //res.status(422).json(err));
  },
};
