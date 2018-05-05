//these are required
const router = require("express").Router();
const doctorsController = require("../../controllers/doctorsController");
const isAuthenticated = require('../isAuthenticated')

module.exports = function(passport){
  // Matches with "/api/doctors"
  console.log('inside doctors controller!')
  router.route("/")
    .get( isAuthenticated,  () => {
      console.log('Executing find all');
      doctorsController.findAll();
    })
    .post(doctorsController.create);
    console.log()

  // Matches with "/api/doctors/:id"
  router.route("/:id")
    .get(isAuthenticated, doctorsController.findById)
    .put(doctorsController.update)
    .delete(doctorsController.remove);

    return router;
}
// module.exports = router;
