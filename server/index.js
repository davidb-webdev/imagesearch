const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use("/favorites", (req, res, next) => {
	// Validate user
	console.log('User validation!');
	next();
});

app.get("/favorites", (req, res) => {
	// Send favorites for specific user
	res.status(200).json("These are your favorites!");
});

app.post("/favorites", (req, res) => {
	express.json(); // parse request body (is undefined otherwise)
	// Save to user's favorites
	res.status(200).json("Favorites saved!");
});

app.listen(port, () => console.log("Server running!"));