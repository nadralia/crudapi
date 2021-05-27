const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movie.controller');

router.post('/', movieController.addMovie);
router.get('/', movieController.findMovies);
router.get('/:id', movieController.findMovieById);
router.put('/:id', movieController.updateMovie);
router.delete('/:id', movieController.deleteById);

module.exports = router;