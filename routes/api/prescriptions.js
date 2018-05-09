//these are required
const router = require("express").Router();
const prescriptionsController = require("../../controllers/prescriptionsController");
const isAuthenticated = require('../isAuthenticated')

module.exports = function(passport){
    // Matches with "/api/prescriptions"
    router.route("/")
        .get(isAuthenticated, prescriptionsController.findAll)
        .post(prescriptionsController.create);

    // Matches with "/api/prescriptions/:id"
    router.route("/:id")
        .delete(prescriptionsController.remove)
        .get(isAuthenticated, prescriptionsController.findById)
        .put(prescriptionsController.update);

    return router;
}

// // Matches with "/api/prescriptions"
// router.route("/")
//     .get(prescriptionsController.findAll)
//     .post(prescriptionsController.create);

// // Matches with "/api/prescriptions/:id"
// router.route("/:id")
//     .delete(prescriptionsController.remove)
//     .get(prescriptionsController.findById)
//     .put(prescriptionsController.update);
// module.exports = router;

