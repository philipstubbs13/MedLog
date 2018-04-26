const router = require("express").Router();
const prescriptionsController = require("../../controllers/prescriptionsController");

// Matches with "/api/prescriptions"
router.route("/")
    .get(prescriptionsController.findAll)
    .post(prescriptionsController.create);

module.exports = router;