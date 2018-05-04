// required packages
const Client = require('../models/Client');
const db = require('../models/Client');

// api endpoint for client POST
//shouldn't this be module.exports
module.exports = {
  findAll: function(req, res) {
    db.Client
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Client
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Client
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log('the findbyid client is not working in clientscontroller.js error: ' + err));
    //res.status(422).json(err));
  },
  update: function(req, res) {
    db.Client
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log('the update client is not working in clientscontroller.js error: ' + err));
    //res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Client
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log('the remove client is not working in clientscontroller.js error: ' + err));
    //res.status(422).json(err));
  },
};


exports.postClients = function(req, res) {
  // create a new instance of client model
  const client = new Client();

  // client properties
  //think this needs to be in Login/Login.js in handling
  client.name = req.body.name;
  client.id = req.body.id;
  client.secret = req.body.secret;
  client.userID = req.user._id;

  // save client & handle errors
  client.save(function(err) {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: 'Client added ', data: client });
      }
  });
};

// api endpoint for client GET
exports.getClients = function(req, res) {
  // use client model to find all clients
  Client.find({ userId: req.user._id }, function(err, clients) {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: 'Client added ', data: client });
      }
  });
};
