const express = require("express");
const { getFavorites, addFavorite } = require("../controllers/favorites");
const {validate} = require("../validate");
const { addFavoriteSchema } = require("../schemas/favorites");
const router = express.Router();

router.get("/:user", getFavorites);
router.post("/add", validate(addFavoriteSchema), addFavorite);

module.exports = router;