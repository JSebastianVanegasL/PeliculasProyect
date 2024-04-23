const historyData = require('./historyData')

function cardsH(data) {
    return data.map((historia) => {
        const card = document.createElement('div');
        card.classList.add('card'); // Agregar clase 'card' a cada carta

        const poster = document.createElement("img");
        poster.src = historia.poster;
        poster.alt = historia.title;

        const overlay = document.createElement("div");
        overlay.classList.add("overlay"); 

        const title = document.createElement('h2');
        title.textContent = historia.title; 
        const year = document.createElement("p");
        year.textContent = historia.years.join(", "); 
        const parrafo = document.createElement('p');
        parrafo.textContent = historia.Parrafo; 

        overlay.appendChild(title);
        overlay.appendChild(year);
        overlay.appendChild(parrafo);

        card.appendChild(poster);
        card.appendChild(overlay);

        return card;
    })
}

const cardhistoria = cardsH(historyData);
const container = document.getElementById('contenedor');
cardhistoria.forEach((card) => container.appendChild(card));