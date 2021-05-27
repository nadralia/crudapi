const movieDao = require('../dao/movie.dao');

function addMovie(req, res) {
    let movie = req.body;
    movieDao.create(movie).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findMovieById(req, res) {
    movieDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    movieDao.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "movie deleted successfully",
                movie: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateMovie(req, res) {
    movieDao.updatemovie(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "movie updated successfully",
                movie: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findMovies(req, res) {
    movieDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

const movieController = {
    addMovie: addMovie,
    findMovies: findMovies,
    findMovieById: findMovieById,
    updateMovie: updateMovie,
    deleteById: deleteById
}


module.exports = movieController;
