//these are required
const router = require("express").Router();
const attachmentsController = require("../../controllers/attachmentsController");
const isAuthenticated = require('../isAuthenticated')

module.exports = function(passport){
  // Matches with "/api/attachments"
  router.route("/")
    .get(isAuthenticated, attachmentsController.findAll)
    .post(attachmentsController.create);

  // Matches with "/api/attachments/:id"
  router.route("/:id")
    .get(isAuthenticated, attachmentsController.findById)
    .put(attachmentsController.update)
    .delete(attachmentsController.remove);

  return router;
}