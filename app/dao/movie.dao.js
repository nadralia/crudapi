const Movie = require('../models/movie.model');
var movieDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateMovie: updateMovie
}

function findAll() {
    return Movie.findAll();
}

function findById(id) {
    return Movie.findByPk(id);
}

function deleteById(id) {
    return Movie.destroy({ where: { id: id } });
}

function create(movie) {
    const newMovie = new Movie(movie);
    return newMovie.save();
}

function updateMovie(movie, id) {
    const updateMovie = {
        budget: movie.budget,
        genres: movie.genres,
        homepage: movie.homepage,
    };
    return Movie.update(updateMovie, { where: { id: id } });
}
module.exports = movieDao;
