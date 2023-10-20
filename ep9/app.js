const express = require("express");
const mongoose = require("mongoose");
const Blog = require("./models/blog");
const { render } = require("ejs");

// express app
const app = express();

// connect mongodb
const dbURI =
	"mongodb+srv://satya:satya123@cluster1.a1ot5bl.mongodb.net/learn-node?retryWrites=true&w=majority";
mongoose
	.connect(dbURI)
	.then((res) => app.listen(3000))
	.catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");

// middleware & static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// mongoose and mongo sandbox routes
// app.get("/add-blog", (req, res) => {
// 	const blog = new Blog({
// 		title: "new blog",
// 		snippet: "about my new blog",
// 		body: "more about my new blog",
// 	});

// 	blog
// 		.save()
// 		.then((result) => {
// 			res.send(result);
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 		});
// });

// app.get("/all-blogs", (req, res) => {
// 	Blog.find()
// 		.then((result) => {
// 			res.send(result);
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 		});
// });

// app.get("/single-blog", (req, res) => {
// 	Blog.findById("65095afdb4ac7e2cf0e773e")
// 		.then((result) => {
// 			res.send(result);
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 		});
// });

// routes
app.get("/", (req, res) => {
	res.redirect("/blogs");
});

app.get("/about", (req, res) => {
	res.render("about", { title: "About" });
});

// blog routes
app.get("/blogs", (req, res) => {
	Blog.find()

		.then((result) => {
			res.render("index", { title: "blogs", blogs: result });
		})
		.catch((err) => {
			console.log(err);
		});
});

app.post("/blogs", (req, res) => {
	const blog = new Blog(req.body);

	blog
		.save()
		.then((result) => {
			res.redirect("/blogs");
		})
		.catch((err) => console.log(err));
});

app.get("/blogs/create", (req, res) => {
	res.render("create");
});

app.get("/blogs/:id", (req, res) => {
	const id = req.params.id;
	Blog.findById(id)
		.then((result) => {
			res.render("details", { blog: result, title: "Blog details" });
		})
		.catch((err) => console.log(err));
});

app.delete("/blogs/:id", (req, res) => {
	const id = req.params.id;
	Blog.findByIdAndDelete(id)
		.then((result) => {
			res.json({ redirect: "/blogs" });
		})
		.catch((err) => console.log(err));
});

// 404 page
app.use((req, res) => {
	res.status(404).render("404", { title: "404 Not Found" });
});
