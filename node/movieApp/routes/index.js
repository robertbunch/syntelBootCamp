var express = require('express');
var router = express.Router();

const apiBaseUrl = `http://api.themoviedb.org/3`;
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${api_key}`;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
