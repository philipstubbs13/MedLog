// required packages
var Client - require('../models/Client');

// api endpoint for client POST
exports.postClients = function(req, res) {
  // create a new instance of client model
  var client = new Client();

  // client properties
  client.name = req.body.name;
  client.id = req.body.id;
  client.secret = req.body.secret;
  client.userID = req.user._id;

  // save client & handle errors
  client.save(function(err) {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: 'Client added', data: client });
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
      res.json({ message: 'Client added', data: client });
      }
  });
};
