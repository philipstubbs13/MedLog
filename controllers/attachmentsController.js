const db = require('../models');

// Defining methods for the attachmentsController
module.exports = {
  findAll: function(req, res) {
      db.Attachments
          .find(req.query)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
      db.Attachments
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Attachments
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log('the findbyid attachment is not working in attachmentscontroller.js error: ' + err));
    //res.status(422).json(err));
  },
  update: function(req, res) {
    db.Attachments
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log('the update attachment is not working in attachmentscontroller.js error: ' + err));
    //res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Attachments
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log('the remove attachment is not working in attachmentscontroller.js error: ' + err));
    //res.status(422).json(err));
  },
};
