const db = require('../models');

// Defining methods for the symptomsController
module.exports = {
    findAll: function (req, res) {
        db.Appointment
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create(req, res) {
        db.Appointment
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
};