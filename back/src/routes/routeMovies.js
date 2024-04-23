const {Router} = require('express')
const routerMovies = Router()
const {getAllMovies, addMovies} = require('../controllers/moviesController')
const {validateMovieData}= require('../middlewares/validation')



routerMovies.post('/', validateMovieData, addMovies)
routerMovies.get('/', getAllMovies)


module.exports = routerMovies;
