var express = require('express');
var router = express.Router();

router.post('/register', (req, res)=>{
	console.log(req);
	res.json("test")
});

module.exports = router;
