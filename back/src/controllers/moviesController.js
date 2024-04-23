const {getMovie, createMovies} = require('../services/movieService')


const getAllMovies = async(req, res) => {
    try {
        const movie = await getMovie()
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


const addMovies = async (req, res) =>{
    try {
        const { title, year, director, duration, genre, rate, poster } = req.body;
        const movie = await createMovies({ title, year, director, duration, genre, rate, poster })
        res.status(201).json({ message: 'Película creada correctamente', movie });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports ={getAllMovies, addMovies}