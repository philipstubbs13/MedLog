const router = require("express").Router();
const appointmentsController = require("../../controllers/appointmentsController");

// Matches with "/api/appointments"
router.route("/")
    .get(appointmentsController.findAll)
    .post(appointmentsController.create);

// Matches with "/api/appointments/:id"
router.route("/:id")
  .get(appointmentsController.findById)
  .put(appointmentsController.update)
  .delete(appointmentsController.remove);

module.exports = router;