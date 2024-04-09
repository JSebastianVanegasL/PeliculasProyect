const movieContainer = document.getElementById("movie-container");

function dataCards(){
  $.get(" https://students-api.up.railway.app/movies",(data)=>{
    const movieCards = Cards(data);
    movieCards.forEach((card) => movieContainer.appendChild(card));
  })
}

function Cards(data) {
  return data.map((movie) => {
    const card = document.createElement("div");
    card.classList.add("movie-card");

    const cardInner = document.createElement("div");
    cardInner.classList.add("movie-card-inner");

    const front = document.createElement("div");
    front.classList.add("movie-card-front");


    const poster = document.createElement("img");
    poster.src = movie.poster;
    poster.alt = movie.title;

    
    front.appendChild(poster);


    const back = document.createElement("div");
    back.classList.add("movie-card-back");

    const title = document.createElement("h2");
    title.textContent = movie.title;

    const year = document.createElement("p");
    year.textContent = `Year: ${movie.year}`;

    const director = document.createElement("p");
    director.textContent = `Director: ${movie.director}`;

    const duration = document.createElement("p");
    duration.textContent = `Duration: ${movie.duration}`;

    const genre = document.createElement("p");
    genre.textContent = `Genre: ${movie.genre.join(", ")}`;

    const rate = document.createElement("p");
    rate.textContent = `Rate: ${movie.rate}`;
    rate.classList.add("rate");
    
    back.appendChild(title);
    back.appendChild(year);
    back.appendChild(director);
    back.appendChild(duration);
    back.appendChild(genre);
    back.appendChild(rate);

    cardInner.appendChild(front);
    cardInner.appendChild(back);

    card.appendChild(cardInner);

    return card;
  });
}

dataCards()