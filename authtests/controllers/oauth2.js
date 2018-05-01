// required packages
const oauth2orize = require('oauth2orize');
//may need to add uid-safe to other oath files
const uid = require('uid-safe');
const User = require('../models/User');
const Client = require('../models/Client');
const Token = require('../models/token');
const Code = require('../models/code');

// create oauth server
const server = oauth2orize.createServer();

// serialize client session when user authorization is requested & received (for easy transmission)
// user authenticates & approves authorization request made by client involving multiple HTTP exchanges which are stored in the session
server.serializeClient(function(client, done) {
  return done(null, client.id);
});

server.deserializeClient(function(id, done) {
  Clients.findOne(id, function(err, client) {
    if (err) { return done(err); }
    return done(null, client);
  });
});

//user grants client acess to protected resources; client exchanges user permission for access token
// authorization codes are saved in db
server.grant(oauth2orize.grant.code(function(client, redirectUri, user, ares, callback) {
  // create new authorization code
  var code = new Code({
    value: uid(16),
    clientId: client._id,
    redirectUri: redirectUri,
    userId: user._id
  });

  // save authorization code
  code.save(function(err) {
    if (err) { return callback(err); }

    callback(null, code.value);
  });
}));


// exchange authorization codes for access tokens
server.exchange(oauth2orize.exchange.code(function(client, code, redirectUri, callback) {
  // find & validate access token matching with authorization code
  Code.findOne({ value: code }, function (err, authCode) {
    if (err) { return callback(err); }
    if (authCode === undefined) { return callback(null, false); }
    if (client._id.toString() !== authCode.clientId) { return callback(null, false); }
    if (redirectUri !== authCode.redirectUri) { return callback(null, false); }

    // delete old authorization code so it will not be reused
    authCode.remove(function (err) {
      if(err) { return callback(err); }

      // create a new access token; token is tied to client & user then saved in db
      var token = new Token({
        value: uid(256),
        clientId: authCode.clientId,
        userId: authCode.userId
      });

      token.save(function (err) {
        if (err) { return callback(err); }
        callback(null, token);
      });
    });
  });
}));

// User authorization endpoint
exports.authorization = [
  server.authorization(function(clientId, redirectUri, callback) {

    Client.findOne({ id: clientId }, function (err, client) {
      if (err) { return callback(err); }

      return callback(null, client, redirectUri);
    });
  }),
  //where do I send this to?
  function(req, res){
    res.render('REACT COMPONENT??', { transactionID: req.oauth2.transactionID, user: req.user, client: req.oauth2.client });
  }
]


// User decision endpoint: either granting or denying access
// will this be used for attachments page to grant access to S3 bucket later? Or may not be necessary??
exports.decision = [
  server.decision()
]

// Application client token exchange endpoint
exports.token = [
  server.token(),
  //unneeded? there is also an npm server error package
  server.errorHandler()
]
