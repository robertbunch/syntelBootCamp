var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/* GET users listing. */
router.get('/daffy', function(req, res, next) {
	res.redirect('http://espn.com/')
  // res.send('new route');
});


module.exports = router;
