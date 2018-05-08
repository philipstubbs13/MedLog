//these are required
const router = require("express").Router();
const doctorsController = require("../../controllers/doctorsController");
const isAuthenticated = require('../isAuthenticated')

module.exports = function(passport){
  // Matches with "/api/doctors"
  router.route("/")
    .get(isAuthenticated, doctorsController.findAll)
    .post(doctorsController.create);

  // Matches with "/api/doctors/:id"
  router.route("/:id")
    .get(isAuthenticated, doctorsController.findById)
    .put(doctorsController.update)
    .delete(doctorsController.remove);

  return router;
}
