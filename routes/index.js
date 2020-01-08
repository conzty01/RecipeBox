var express = require('express');
const passport = require('passport');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST login function */
router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    console.log(req.body);
    res.redirect('/main');
  }
);

module.exports = router;
