var express = require('express');
var router = express.Router();

let bandMembers = [
	`Tommy Lee`,
	`Mick Marks`,
	`Vince Neil`,
	`Nicky Stixx`
];

console.log(bandMembers)

/* GET home page. */
router.get('/', function(req, res, next) {
	// in the router/controller, our var is bandMembers
	// in the view, the same thing will be called theBand
  res.render('index', { theBand: bandMembers });
});

router.get('/add/:member',(req, res, next)=>{
	// req.params is an object with a property for
	// every :something in the path name
	const newMember = req.params.member;
	// res.send(newMember);
	bandMembers.push(newMember);
	res.redirect('/');
});

router.get('/remove/:member',(req, res, next)=>{
	const memberToRemove = req.params.member;
	const indexToSplice = bandMembers.indexOf(memberToRemove);
	if(indexToSplice > -1){
		bandMembers.splice(indexToSplice,1);
	}
	res.redirect('/')
})


module.exports = router;
