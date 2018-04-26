const db = require('../models');

// Defining methods for the logsController
module.exports = {
  findAll: function (req, res) {
      db.HealthLog
          .find(req.query)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
  },
  create(req, res) {
      db.HealthLog
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.HealthLog
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log('the findbyid healthlog is not working in logsController.js error: ' + err));
    //res.status(422).json(err));
  },
  update: function (req, res) {
    db.HealthLog
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log('the update healthlog is not working in logsController.js error: ' + err));
    //res.status(422).json(err));
  },
  remove: function (req, res) {
    db.HealthLog
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log('the remove healthlog is not working in logsController.js error: ' + err));
    //res.status(422).json(err));
  },
};
