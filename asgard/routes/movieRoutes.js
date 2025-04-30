const express = require('express');
const { getAllMovies, getMovieById, createMovie } = require('./../controllers/movieController');
const protect = require('../middlewares/protect');

const router = express.Router();

router.get("/", getAllMovies);
router.get("/:id", getMovieById);
router.post("/", protect, createMovie);

module.exports = router;