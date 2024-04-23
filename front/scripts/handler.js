const Cards = require('./renderCards')
const axios = require('axios')

const getFilms = async() =>{
    try {
        const {data} = await axios.get('http://localhost:3000/movies')
        Cards(data)
    } catch (error) {
        console.error('Error al traer las peliculas', error)
    }
  
}

module.exports = getFilms