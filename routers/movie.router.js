const express = require("express");
const movieRouter = express.Router();

const {
  getListMovie,
  detailMovie,
  createMovie,
  removeMovie,
  updateMovie,
} = require("../controllers/movie.controller");

movieRouter.get("/", getListMovie);
movieRouter.get("/:id", detailMovie);
movieRouter.post("/", createMovie);
movieRouter.delete("/:id", removeMovie);
movieRouter.put("/:id", updateMovie);
module.exports = {
  movieRouter,
};
