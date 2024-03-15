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
	for (const userObject of favorites) {
		if (userObject.user === req.params.user) {
			return res.status(200).json(userObject.favoriteImages);
		}
	}
	res.status(404).json("User not found");
}

const addFavorite = async (req, res) => {
	const favorites = await readFavorites();
	
	for (const userObject of favorites) {
		if (userObject.user === req.body.user) {
			userObject.favoriteImages.push(req.body.favoriteImages[0]);
			await writeFavorites(favorites);
			return res.status(200).json("Favorite added");
		}
	}

	favorites.push(req.body);
	await writeFavorites(favorites);
	res.status(200).json("Favorite added");
}

module.exports = {getFavorites, addFavorite};