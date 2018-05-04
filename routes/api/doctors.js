//these are required
const router = require("express").Router();
const doctorsController = require("../../controllers/doctorsController");
const passport = require("passport");

module.exports = function(passport){
  // Matches with "/api/doctors"
  router.route("/")
    .get( passport.authenticate('local', { failureRedirect: '/Signup' }), doctorsController.findAll)
    .post(doctorsController.create);
    console.log()

  // Matches with "/api/doctors/:id"
  router.route("/:id")
    .get(doctorsController.findById)
    .put(doctorsController.update)
    .delete(doctorsController.remove);
    return router;
}
// module.exports = router;
