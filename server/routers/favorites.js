const express = require("express");
const {
  getFavorites,
  addFavorite,
  removeFavorite
} = require("../controllers/favorites");
const { validate } = require("../validate");
const { addFavoriteSchema, removeFavoriteSchema } = require("../schemas/favorites");
const router = express.Router();

router.get("/", getFavorites);
router.post("/add", validate(addFavoriteSchema), addFavorite);
router.delete("/remove", validate(removeFavoriteSchema), removeFavorite);

module.exports = router;
