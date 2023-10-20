const xyz = require("./data");

const fs = require("fs");

// CRUD ASYNC
// read
// fs.readFile("./test.txt", (err, data) => {
// 	if (err) {
// 		console.log(err);
// 	}
// 	console.log(data.toString());
// });

// write
// fs.writeFile("./test.txt", "hello world", () => {
// 	console.log("file was written");
// });

// directories
// if (!fs.existsSync("./assets")) {
// 	fs.mkdir("./assets", (err) => {
// 		if (err) {
// 			console.log(err);
// 		}
// 		console.log("folder created");
// 	});
// } else {
// 	fs.rmdir("./assets", (err) => {
// 		if (err) {
// 			console.log(err);
// 		}
// 		console.log("folder deleted");
// 	});
// }

// deleting
// if (fs.existsSync("./deleteme.txt")) {
// 	fs.unlink("./deleteme.txt", (err) => {
// 		if (err) {
// 			console.log(err);
// 		}
// 		console.log("deleted");
// 	});
// }
