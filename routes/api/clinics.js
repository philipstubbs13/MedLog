//these are required
const router = require("express").Router();
const clinicsController = require("../../controllers/clinicsController");
const isAuthenticated = require('../isAuthenticated')

module.exports = function(passport){
  // Matches with "/api/clinics"
  router.route("/")
    .get(isAuthenticated, clinicsController.findAll)
    .post(clinicsController.create);

  // Matches with "/api/clinics/:id"
  router.route("/:id")
    .get(isAuthenticated, clinicsController.findById)
    .put(clinicsController.update)
    .delete(clinicsController.remove);

  return router;
}

// // Matches with "/api/clinics"
// router.route("/")
//   .get(clinicsController.findAll)
//   .post(clinicsController.create);

// // Matches with "/api/clinics/:id"
// router.route("/:id")
//   .get(clinicsController.findById)
//   .put(clinicsController.update)
//   .delete(clinicsController.remove);

// module.exports = router;

