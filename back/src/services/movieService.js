const Movie = require('../models/movieModel')

const getMovie = async()=>{
    try {
    const movies = await Movie.find()
    return movies
    } catch (error) {
        throw new Error(error);
    }

}

const createMovies = async(movieData)=>{
    try {
        const movie = new Movie(movieData)
        await movie.save();
        return movie
    } catch (error) {
        throw new Error(error);
        
    }
}

module.exports = { getMovie, createMovies}
