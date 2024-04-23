const {Router} = require('express')
const router = Router()
const routerMovies = require('./routeMovies')

router.use('/movies', routerMovies);

module.exports = router;
