(()=>{var e={602:(e,t,n)=>{const a=n(989);e.exports=()=>{$.get(" https://students-api.up.railway.app/movies",(e=>{a(e)})).fail((()=>alert("error al traer las peliculas")))}},989:e=>{const t=document.getElementById("movie-container");e.exports=function(e){return e.map((e=>{const n=document.createElement("div");n.classList.add("movie-card");const a=document.createElement("div");a.classList.add("movie-card-inner");const d=document.createElement("div");d.classList.add("movie-card-front");const o=document.createElement("img");o.src=e.poster,o.alt=e.title,d.appendChild(o);const r=document.createElement("div");r.classList.add("movie-card-back");const c=document.createElement("h2");c.textContent=e.title;const i=document.createElement("p");i.textContent=`Year: ${e.year}`;const s=document.createElement("p");s.textContent=`Director: ${e.director}`;const p=document.createElement("p");p.textContent=`Duration: ${e.duration}`;const l=document.createElement("p");l.textContent=`Genre: ${e.genre.join(", ")}`;const m=document.createElement("p");m.textContent=`Rate: ${e.rate}`,m.classList.add("rate"),r.appendChild(c),r.appendChild(i),r.appendChild(s),r.appendChild(p),r.appendChild(l),r.appendChild(m),a.appendChild(d),a.appendChild(r),n.appendChild(a),t.appendChild(n)}))}}},t={};!function n(a){var d=t[a];if(void 0!==d)return d.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,n),o.exports}(602)()})();