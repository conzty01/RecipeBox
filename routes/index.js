var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST login function */
router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    console.log(req.body);
    res.redirect
  }
);

module.exports = router;
