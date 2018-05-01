app.get('/', (req, res, next) => {
  res.json('req.user is: ' + req.user)
})
app.post('/login',
    passport.authenticate('local', {failureRedirect: '/'}), (req, res) => res.json('logged in!'))
app.post('/logout', (req, res) => { req.logout(); res.redirect('/'); })

app.post('/signup', (req, res, next) => {
  var user = new User({username: req.body.username, password: req.body.password})
  user.save().then(data => console.log(data)).catch(err => console.log(err))
  res.redirect('/')
})
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});
app.get('/profile',
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    res.json(req.user);
  });
