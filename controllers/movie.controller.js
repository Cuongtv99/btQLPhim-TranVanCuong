const { Movie } = require("../models");

const getListMovie = async (req, res) => {
  try {
    const movieList = await Movie.findAll();
    res.status(200).send(movieList);
  } catch (error) {
    res.status(500).send(error);
  }
};
const detailMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const movieDetail = await Movie.findByPk(id);
    if (movieDetail) {
      res.status(200).send(movieDetail);
    } else {
      res.status(404).send("Not Found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
const createMovie = async (req, res) => {
  const { name, totleMovieTime, poster, trailer } = req.body;
  try {
    const newMovie = await Movie.create({
      name,
      totleMovieTime,
      poster,
      trailer,
    });
    res.status(201).send(newMovie);
  } catch (error) {
    res.status(500).send(error);
  }
};
const removeMovie = async (req, res) => {
  const { id } = req.params;
  try {
    await Movie.destroy({
      where: {
        id,
      },
    });
    res.status(200).send("Delete Success");
  } catch (error) {
    res.status(500).send(error);
  }
};
const updateMovie = async (req, res) => {
  const { id } = req.params;
  const { name, totleMovieTime, poster, trailer } = req.body;
  try {
    const [countUpdate] = await Movie.update(
      {
        name,
        totleMovieTime,
        poster,
        trailer,
      },
      {
        where: {
          id,
        },
      }
    );
    if (countUpdate > 0) {
      res.status(200).send("Update Success");
    } else {
      res.status(404).send("Not Found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getListMovie,
  detailMovie,
  createMovie,
  removeMovie,
  updateMovie,
};
