const db = require('../models');

// Defining methods for the symptomsController
module.exports = {
  findAll: function (req, res) {
      db.Prescription
          .find(req.query)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
  },
  create(req, res) {
      db.Prescription
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Prescription
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log('the findbyid Prescription is not working in Prescriptionscontroller.js error: ' + err));
    //res.status(422).json(err));
  },
  update: function (req, res) {
    db.Prescription
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log('the update Prescription is not working in Prescriptionscontroller.js error: ' + err));
    //res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Prescription
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log('the remove Prescription is not working in Prescriptionscontroller.js error: ' + err));
    //res.status(422).json(err));
  },
};