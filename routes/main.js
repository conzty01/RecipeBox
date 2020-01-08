var express = require('express');
const passport = require('passport');
var router = express.Router();

/* GET main page. */
router.get('/main', passport.authenticate('local', { failureredirect: '/login' }),
  function(req, res, next) {
    res.render('main', { title: 'Digital Cookbook' });
  }
);


module.exports = router;
