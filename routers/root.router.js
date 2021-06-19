const { movieRouter } = require("./movie.router");
const express = require("express");
const rootRouter = express.Router();

rootRouter.use("/movies", movieRouter);

module.exports = {
  rootRouter,
};
