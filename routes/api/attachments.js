const router = require("express").Router();
const attachmentsController = require("../../controllers/attachmentsController");

// Matches with "/api/attachments"
router.route("/")
    .get(attachmentsController.findAll)
    .post(attachmentsController.create);

// Matches with "/api/attachments/:id"
router.route("/:id")
  .get(attachmentsController.findById)
  .put(attachmentsController.update)
  .delete(attachmentsController.remove);

module.exports = router;
