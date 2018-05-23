var express = require('express');
var router = express.Router();
// mysql module translates from node to SQL and back
const mysql = require('mysql')
const creds = require('../config/creds');
const connection = mysql.createConnection(creds);
connection.connect();

// include bcrypt for hasing and validating passwords
const bcrypt = require('bcrypt-nodejs');
// include rand-token so we have a token to give React
const randToken = require('rand-token');

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
	const token = randToken.uid(60);
	connection.query(insertUserQuery, [email, hashedPassword,token],(error, results)=>{
		if(error){throw error;}
		res.json({
			token,
			msg: "registerSuccess"
		})
	});
});

router.post('/addFav', (req, res)=>{
	const movieToAdd = req.body.movieId;
	const userToken = req.body.token;

	const getUser = `SELECT id FROM users WHERE token = ?`
	connection.query(getUser,[userToken],(error, results)=>{
		if(error){throw error;}
		if(results.length > 0){
			// these are the droids we're looking for
			// this is a valid token!! Hooray!
			const insertQuery = `INSERT INTO favorites
			(mid,uid)
				VALUES
			(?,?)`;
			connection.query(insertQuery,[movieToAdd,results[0].id],(error2, results2)=>{
				res.json({
					msg:"favAdded"
				})
			})
		}else{
			// You dont want to sell me death sticks
			// you want to go home and rethink your life
			// In other words. Your token is bogus. Goodbye
			res.json({
				msg: "badToken"
			})
		}
	})
})

module.exports = router;
