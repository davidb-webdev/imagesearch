const express = require("express");
const { getFavorites, saveFavorite } = require("../controllers/favorites");
const router = express.Router();

router.get("/", getFavorites);
router.post("/", saveFavorite);

module.exports = router;