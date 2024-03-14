const express = require("express");
const app = express();

require("dotenv").config();
const port = process.env.PORT || 3000;

const favoritesRouter = require("./routers/favorites");

// Middleware
app.use(express.json());

// Routers
app.use("/favorites", favoritesRouter);

app.listen(port, () => console.log("Server running!"));