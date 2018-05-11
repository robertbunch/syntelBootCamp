// // At the top, put your required node mouldes.
// // Require is kind of like the node version of <script>

// // http is part of node core! We dont have to install or ask for it
// // It comes with node. Just require it. 
// // Node is like a mr potato-head man doll. Node can run lean!
// // It doesnt come with bulk ware.
// const http = require("http");
// // console.log(typeof(http))

// // fs = file system. fs gives node access to the computer its running on
// // part of node. No need to install. It gives node access to the file system on THIS computer. The compute running the js file
// const fs = require("fs");

// // createServer takes 2 args:
// // 1. request
// // 2. response
// const server = http.createServer((req, res)=>{
// 	// console.log('Inside createServer');
// 	console.log(req.url);

// 	if(req.url === '/'){
// 		// writeHead takes 2 minimum of 2 args:
// 		// 1. status code
// 		// 2. header object, which needs to include the mime-type of whatever is being sent back
// 		res.writeHead(200,{'content-type':'text/plain'})
// 		res.write(`<h1>Server responding!</h1>`);
// 		res.end();
// 		res.write(`<h1>Server responding!</h1>`);
// 	}else{
// 		res.writeHead(404,{'content-type':'text/html'})
// 		res.write(`<h1>Requested page not found!!</h1>`);
// 		res.end();
// 	}

// })

// // Tell the server we created with the http object to listen for http traffic (duh) on port 8080;
// // When a request comes in on port 8080, via http, the callback/anon function in createServer will fire off with the req and res objects available
// server.listen(8080);



// console.log('dsfsd123asdfa454sdf2dsa'.replace(/\d\d+/g,"A"))

