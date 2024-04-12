const express = require("express");
const cors = require("cors");
require("dotenv").config();

const favoritesRouter = require("./routers/favorites");
const port = process.env.PORT;
const app = express();

// Middleware
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// Routers
app.use("/favorites", favoritesRouter);

// Listeners
app.listen(port || 3000, () => console.log("Server running!"));
