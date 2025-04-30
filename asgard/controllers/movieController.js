const Movie = require("../models/movie")

exports.getAllMovies = async(req, res) => {
    try{
        const movies = await Movie.find();
        res.status(200).json(movies);
    }catch(err){
        res.status(500).json({
            message: "Error fetching all movies", error: err.message
        })
    }
}

exports.getMovieById = async (req,res) => {
    try{
        const movie = await Movie.findById(req.params.id);
        if(!movie) return res.status(400).json({message: "movie not found"});
    }catch(err){
        res.status(500).json({
            message: "Error fetching movie", error: err.message
        })
    }
}

exports.createMovie = async(req, res) => {
    try{
        const movie = await Movie.create(req.body);
        res.status(201).json(movie);
    }catch(err){
        res.status(500).json({
            message: "Error creating movies", error: err.message
        })
    }
}