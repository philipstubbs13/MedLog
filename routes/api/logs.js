const router = require("express").Router();
const logsController = require("../../controllers/healthLogController");

// Matches with "/api/logs"
router.route("/")
    .get(logsController.findAll)
    .post(logsController.create);

// Matches with "/api/logs/:id"
router.route("/:id")
  .get(logsController.findById)
  .put(logsController.update)
  .delete(logsController.remove);

module.exports = router;