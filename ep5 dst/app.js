const express = require("express");

// express app
const app = express();

// register view engine
app.set("view engine", "ejs");

// listen for requests
app.listen(3000);

// middleware
app.use((req, res, next) => {
	console.log("new request made");
	console.log("host: ", req.hostname);
	console.log("path: ", req.path);
	console.log("method: ", req.method);
	next();
});

app.get("/", (req, res) => {
	// res.send("<p>Home page</p>");
	// res.sendFile("./views/index.html", { root: __dirname });

	// render ejs

	res.render("index", { title: "Home" });
});

app.get("/about", (req, res) => {
	// res.send("<p>About page</p>");
	// res.sendFile("./views/about.html", { root: __dirname });

	// render ejs
	res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
	res.render("create", { title: "Create blog" });
});

// // redirects
// app.get("/about-us", (req, res) => {
// 	res.redirect("/about");
// });

// 404 page
app.use((req, res) => {
	// res.status(404).res.sendFile("./views/404.html", { root: __dirname });

	// render ejs
	res.status(404).render("404", { title: "404 Not Found" });
});
