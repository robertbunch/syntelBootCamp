var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	// accept user input
	// query database based on user input
	// store db data in var
	const atlTeams = [
		`Braves`,
		`Falcons`,
		`United`,
		`Hawks`
	]
  res.render('index', { atlTeams });
});

router.get('/football', (req, res)=>{
	const atlTeams = [
		`Falcons`,
		`Braves`,
		`United`,
		`Hawks`
	]
	res.render('index',{ atlTeams });
})


module.exports = router;
