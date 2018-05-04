const router = require("express").Router();
const passport = require("passport");
const User = require("../../models/User");


router.get('/', (req, res, next) => {
    res.json('req.user is: ' + req.user);
  });
  
  router.post(
    '/login',
    passport.authenticate('local', { failureRedirect: '/Signup' }),
    (req, res) => res.json('logged in!')
  );
  
  router.post('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
  
router.get("/authenticate",  
  passport.authenticate('local', { failureRedirect: '/Signup' })

);

  router.post('/signup', (req, res, next) => {
    console.log("inside signup routes!")
    var user = new User({
      username: req.body.username,
      password: req.body.password
    });
    user
      .save()
      .then(data => console.log(data))
      .catch(err => console.log(err));
    // res.redirect('/');


    res.json("all good")
  });

  module.exports = router;