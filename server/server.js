const express = require("express");
const cors = require("cors");
require("dotenv").config();

const favoritesRouter = require("./routers/favorites");
const port = process.env.PORT;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routers
app.use("/favorites", favoritesRouter);

app.listen(port, () => console.log("Server running!"));