const fs = require("fs").promises;

const readFavorites = async () => {
  const data = await fs.readFile("./favorites.json");
  return JSON.parse(data);
};

const writeFavorites = async (content) => {
  await fs.writeFile("./favorites.json", JSON.stringify(content, null, 2));
};

const getFavorites = async (req, res) => {
  const favorites = await readFavorites();
  for (const userObject of favorites) {
    if (userObject.user === req.headers["user-id"]) {
      return res.status(200).json(userObject.favoriteImages);
    }
  }
  res.status(404).json("User not found");
};

const addFavorite = async (req, res) => {
  if (req.headers["user-id"]) {
    const favorites = await readFavorites();

    for (const userObject of favorites) {
      if (userObject.user === req.headers["user-id"]) {
        userObject.favoriteImages.push(req.body);
        await writeFavorites(favorites);
        return res.status(200).json("Favorite added");
      }
    }

    favorites.push({ user: req.headers["user-id"], favoriteImages: req.body });
    await writeFavorites(favorites);
    res.status(200).json("Favorite added");
  }
  res.status(401).json("Unauthorized");
};

const removeFavorite = async (req, res) => {
  let favorites = await readFavorites();
  for (const userObject of favorites) {
    if (userObject.user === req.headers["user-id"]) {
      userObject.favoriteImages = userObject.favoriteImages.filter(
        (userFavorite) => {
          return userFavorite.url !== req.body.url;
        }
      );
      await writeFavorites(favorites);
      return res.status(200).json("Favorite removed");
    }
  }
  res.status(404).json("Favorite not found");
};

module.exports = { getFavorites, addFavorite, removeFavorite };
