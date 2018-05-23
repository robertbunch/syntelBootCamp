var express = require('express');
var router = express.Router();
// mysql module translates from node to SQL and back
const mysql = require('mysql')
const creds = require('../config/creds');
const connection = mysql.createConnection(creds);
connection.connect();

// include bcrypt for hasing and validating passwords
const bcrypt = require('bcrypt-nodejs');

router.post('/register', (req, res)=>{
	// console.log(req);
	// req.BODY
	const password = req.body.password;
	const hashedPassword = bcrypt.hashSync(password);
	const email = req.body.email;
	console.log(email, password);
	// res.json("test")
	// we now have the user name email and password
	// Insert them into the database
	const insertUserQuery = `INSERT into users
		(email, password, token)
			VALUES
		(?, ?, ?)`;
		connection.query(insertUserQuery, [email, hashedPassword,""],(error, results)=>{
			if(error){throw error;}
			res.json("User inserted")
		})


});

module.exports = router;
