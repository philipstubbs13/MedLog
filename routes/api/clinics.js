//these are required
const router = require("express").Router();
const clinicsController = require("../../controllers/clinicsController");

// Matches with "/api/clinics"
router.route("/")
  .get(clinicsController.findAll)
  .post(clinicsController.create);

// Matches with "/api/clinics/:id"
router.route("/:id")
  .get(clinicsController.findById)
  .put(clinicsController.update)
  .delete(clinicsController.remove);

module.exports = router;