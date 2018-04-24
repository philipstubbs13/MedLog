const router = require("express").Router();
const appointmentsController = require("../../controllers/appointmentsController");

// Matches with "/api/appointments"
router.route("/")
    .get(appointmentsController.findAll);

module.exports = router;