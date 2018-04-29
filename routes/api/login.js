const router = require("express").Router();
const oath2Controller = require('./controllers/oath2');
const clientController = require('./controllers/client');
const authController = require('???????????????');


// CLIENT AUTH ROUTES:
//route for client POST & GET
router.route('/clients')
  .post(authController.isAuthenticated, clientController.postClients)
  .get(authController.isAuthenticated, clientController.getClients);


// OATH AUTH ROUTES:
//route for oauth POST & GET
router.route('/oauth2/authorize')
  .get(authController.isAuthenticated, oauth2Controller.authorization)
  .post(authController.isAuthenticated, oauth2Controller.decision);


// TOKEN AUTH ROUTES:
//route for token POST
router.route('./oauth2/token')
  .post(authController.isClientAuthenticated, oauth2Controller.token);
