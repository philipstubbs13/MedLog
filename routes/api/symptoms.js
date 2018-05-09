//these are required
const router = require("express").Router();
const symptomsController = require("../../controllers/symptomsController");
const isAuthenticated = require('../isAuthenticated')

module.exports = function(passport){
  // Matches with "/api/symptoms"
  router.route("/")
      .get(isAuthenticated, symptomsController.findAll)
      .post(symptomsController.create);

  // Matches with "/api/symptoms/:id"
  router.route("/:id")
    .get(isAuthenticated, symptomsController.findById)
    .put(symptomsController.update)
    .delete(symptomsController.remove);

  return router;
} 

// // Matches with "/api/symptoms"
// router.route("/")
//   .get(symptomsController.findAll)
//   .post(symptomsController.create);

// // Matches with "/api/symptoms/:id"
// router.route("/:id")
//   .get(symptomsController.findById)
//   .put(symptomsController.update)
//   .delete(symptomsController.remove);

// module.exports = router;

