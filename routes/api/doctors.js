//these are required
const router = require("express").Router();
const doctorsController = require("../../controllers/doctorsController");

// Matches with "/api/doctors"
router.route("/")
  .get(doctorsController.findAll)
  .post(doctorsController.create);

// Matches with "/api/doctors/:id"
router.route("/:id")
  .get(doctorsController.findById)
  .put(doctorsController.update)
  .delete(doctorsController.remove);

module.exports = router;
