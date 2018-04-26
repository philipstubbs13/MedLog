const db = require('../models');

// Defining methods for the appointmentsController
module.exports = {
  findAll: function(req, res) {
      db.Appointment
          .find(req.query)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
      db.Appointment
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Appointment
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log('the findbyid appointment is not working in appointmentscontroller.js error: ' + err));
    //res.status(422).json(err));
  },
  update: function(req, res) {
    db.Appointment
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log('the update appointment is not working in appointmentscontroller.js error: ' + err));
    //res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Appointment
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log('the remove appointment is not working in appointmentscontroller.js error: ' + err));
    //res.status(422).json(err));
  },
};
