const router = require("express").Router();
const logsController = require("../../controllers/healthLogController");

// Matches with "/api/logs"
router.route("/")
    .get(logsController.findAll)
    .post(logsController.create);


module.exports = router;