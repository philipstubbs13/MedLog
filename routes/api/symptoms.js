const router = require("express").Router();
const symptomsController = require("../../controllers/symptomsController");

// Matches with "/api/symptoms"
router.route("/")
    .get(symptomsController.findAll)
    .post(symptomsController.create);


module.exports = router;
