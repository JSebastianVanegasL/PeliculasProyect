const Cards = require('./renderCards')

const getFilms = () =>{
    $.get(" https://students-api.up.railway.app/movies",(data)=>{
        Cards(data);
    }).fail(()=> alert('error al traer las peliculas'))
  
}

module.exports = getFilms