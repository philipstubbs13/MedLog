//controller for doctors
const db = require('../models');

// Defining methods for the doctorsController
module.exports = {
  findAll: function (req, res) {
    db.Doctor
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log('the findall doctor is not working in doctorscontroller.js error: ' + err));
        //res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Doctor
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log('the findbyid doctor is not working in doctorscontroller.js error: ' + err));
        //res.status(422).json(err));
  },
  create: function (req, res) {
    db.Doctor
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => 
        console.log('the create doctor is not working in doctorscontroller.js error: ' + err));
        //res.status(422).json(err));
  },
  update: function (req, res) {
    db.Doctor
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log('the update doctor is not working in doctorscontroller.js error: ' + err));
        //res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Doctor
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log('the remove doctor is not working in doctorscontroller.js error: ' + err));
        //res.status(422).json(err));
  }
};
