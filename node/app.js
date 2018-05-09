// http is part of core. Include it so we can make a sever.
const http = require('http');
const fs = require('fs');

// function renderHomePage(req, res){
function renderHomePage(){
	// res.writeHead(200,{
	// 	'content-type':'text/html'
	// });
	// res.end(`<h1>Your page has loaded</h1>`);
	const theHTMLtoGet = fs.readFileSync('./homepage.html');
	return theHTMLtoGet;
}

const server = http.createServer((req, res)=>{
	if(req.url === '/'){
		// renderHomePage(req, res);
		res.writeHead(200,{'content-type':'text/html'});
		res.end(renderHomePage());
	}else if(req.url === '/virat.jpg'){
		res.writeHead(200,{'content-type':'image/jpg'});
		const img = fs.readFileSync('virat.jpg');
		res.end(img);
	}else if(req.url==='/gallery'){
		res.writeHead(200,{'content-type':'text/html'});
		const htmlToUse = fs.readFileSync('gallery.html');
		res.end(htmlToUse);
	}else{
		console.log(req.url + `was not found`);
		res.end(`Page not found!`);
	}

});

server.listen(3000);
console.log(`Server is listening on port 3000...`);