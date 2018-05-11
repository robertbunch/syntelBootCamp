// We have access to the express module, BECAUSE
// we used npm to install it. Unlike http and fs,
// its NOT part of core. It's an extension
const express = require('express');
const app = express();

// app.get takes 2 args:
// 1. THe endpoint with verb
// 2. callback to run upon request for that route
app.post('/',(req,res)=>{
	res.send(`Hello, World!`);
});

app.listen(3000);
console.log("App is listening on port 3000 via nodemon");