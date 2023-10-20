// // create http module
// const http = require("http");

// // create server
// const server = http.createServer((req, res) => {
// 	console.log(req.url, req.method);

// 	// set header content type
// 	res.setHeader("Contet-Type", "text/html");

// 	res.write("<p>test</p>");
// 	res.end();
// });

// server.listen(3000, "localhost", () => {
// 	console.log("listening for request on port 3000");
// });

// =================

// create http module
const http = require("http");
const fs = require("fs");

// create server
const server = http.createServer((req, res) => {
	console.log(req.url, req.method);

	// set header content type
	res.setHeader("Contet-Type", "text/html");

	let path = "./views/";

	switch (req.url) {
		case "/":
			path += "index.html";
			res.statusCode = 200;
			break;
		case "/about":
			path += "about.html";
			res.statusCode = 200;
			break;
		// redirect
		case "/about-me":
			res.statusCode = 301;
			res.setHeader("Location", "/about");
			res.end();
			break;
		default:
			path += "404page.html";
			res.statusCode = 404;
			break;
	}

	fs.readFile(path, (err, data) => {
		if (err) {
			console.log(err);
			res.end();
		} else {
			res.end(data);
		}
	});
});

server.listen(3000, "localhost", () => {
	console.log("listening for request on port 3000");
});
