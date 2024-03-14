const fs = require("fs").promises;
const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

const readFavorites = async () => {
	const data = await fs.readFile("./favorites.json");
	return JSON.parse(data);
}

const writeFavorites = async (content) => {
	await fs.writeFile("./favorites.json", JSON.stringify(content, null, 2));
}

app.use(express.json());

app.get("/favorites", async (req, res) => {
	const favorites = await readFavorites();
	res.status(200).json(favorites);
});

app.post("/favorites", async (req, res) => {
	const favorites = await readFavorites();
	favorites.push(req.body);
	writeFavorites(favorites);

	res.status(200).json("Favorites saved!");
});

app.listen(port, () => console.log("Server running!"));