const express = require('express');
const serve   = require('express-static');
const app = express();
app.use(serve(__dirname + '/'));
app.listen(3000);
console.log("Listening on port 3000...")