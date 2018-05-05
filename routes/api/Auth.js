const router = require("express").Router();
// const passport = require('passport');


module.exports = function(passport, User){
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
    

    router.post('/signup', (req, res, next) => {
      console.log("inside signup routes!")
      var user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
      });
      user
        .save()
        .then(data => console.log(res.json("sign up worked! all good"), data))
        .catch(err => console.log(res.json("sign up didn't work."), err));
      // res.redirect('/');


      
    });

  return router;
}