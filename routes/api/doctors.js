// Require all models is this the correct relative path?
const db = require("../models");

//these are required
const router = require("express").Router();
const doctorsController = require("../../controllers/doctorsController");

// Matches with "/api/doctors"
router.route("/doctors")
  .get(doctorsController.findAll)
  .post(doctorsController.create);

// Matches with "/api/doctors/:id"
router.route("/doctors/:id")
  .get(doctorsController.findById)
  .put(doctorsController.update)
  .delete(doctorsController.remove);

module.exports = router;
