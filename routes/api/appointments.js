//these are required
const router = require("express").Router();
const appointmentsController = require("../../controllers/appointmentsController");
const isAuthenticated = require('../isAuthenticated')

module.exports = function(passport){
  // Matches with "/api/appointments"
  router.route("/")
    .get(isAuthenticated, appointmentsController.findAll)
    .post(appointmentsController.create);

  // Matches with "/api/appointments/:id"
  router.route("/:id")
    .get(isAuthenticated, appointmentsController.findById)
    .put(appointmentsController.update)
    .delete(appointmentsController.remove);

  return router;
}

// // Matches with "/api/appointments"
// router.route("/")
//   .get(appointmentsController.findAll)
//   .post(appointmentsController.create);

// // Matches with "/api/appointments/:id"
// router.route("/:id")
//   .get(appointmentsController.findById)
//   .put(appointmentsController.update)
//   .delete(appointmentsController.remove);

// module.exports = router;

