const fs = require("fs").promises;

const readFavorites = async () => {
	const data = await fs.readFile("./favorites.json");
	return JSON.parse(data);
}

const writeFavorites = async (content) => {
	await fs.writeFile("./favorites.json", JSON.stringify(content, null, 2));
}

const getFavorites = async (req, res) => {
	const favorites = await readFavorites();
	res.status(200).json(favorites);
}

const saveFavorite = async (req, res) => {
	const favorites = await readFavorites();
	favorites.push(req.body);
	writeFavorites(favorites);

	res.status(200).json("Favorites saved!");
}

module.exports = {getFavorites, saveFavorite};