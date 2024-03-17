const express = require("express");
const {
  getFavorites,
  addFavorite,
  removeFavorite
} = require("../controllers/favorites");
const { validate } = require("../validate");
const { userFavoriteSchema } = require("../schemas/favorites");
const router = express.Router();

router.get("/:user", getFavorites);
router.post("/add", validate(userFavoriteSchema), addFavorite);
router.delete("/remove", validate(userFavoriteSchema), removeFavorite);

module.exports = router;
