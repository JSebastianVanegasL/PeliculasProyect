/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/cardsHistory.js":
/*!*********************************!*\
  !*** ./scripts/cardsHistory.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const historyData = __webpack_require__(/*! ./historyData */ \"./scripts/historyData.js\")\r\n\r\nfunction cardsH(data) {\r\n    return data.map((historia) => {\r\n        const card = document.createElement('div');\r\n        card.classList.add('card'); // Agregar clase 'card' a cada carta\r\n\r\n        const poster = document.createElement(\"img\");\r\n        poster.src = historia.poster;\r\n        poster.alt = historia.title;\r\n\r\n        const overlay = document.createElement(\"div\");\r\n        overlay.classList.add(\"overlay\"); \r\n\r\n        const title = document.createElement('h2');\r\n        title.textContent = historia.title; \r\n        const year = document.createElement(\"p\");\r\n        year.textContent = historia.years.join(\", \"); \r\n        const parrafo = document.createElement('p');\r\n        parrafo.textContent = historia.Parrafo; \r\n\r\n        overlay.appendChild(title);\r\n        overlay.appendChild(year);\r\n        overlay.appendChild(parrafo);\r\n\r\n        card.appendChild(poster);\r\n        card.appendChild(overlay);\r\n\r\n        return card;\r\n    })\r\n}\r\n\r\nconst cardhistoria = cardsH(historyData);\r\nconst container = document.getElementById('contenedor');\r\ncardhistoria.forEach((card) => container.appendChild(card));\n\n//# sourceURL=webpack://front/./scripts/cardsHistory.js?");

/***/ }),

/***/ "./scripts/historyData.js":
/*!********************************!*\
  !*** ./scripts/historyData.js ***!
  \********************************/
/***/ ((module) => {

eval("const historyData = [\r\n  {\r\n    title: \"Orígenes del cine\",\r\n    years: [1890],\r\n    Parrafo: 'Los primeros experimentos con imágenes en movimiento se remontan a la década de 1890. Pioneros como los hermanos Lumière en Francia y Thomas Edison en Estados Unidos desarrollaron tecnologías para proyectar cortometrajes. Uno de los primeros cortometrajes famosos es \"Salida de los obreros de la fábrica Lumière\" (1895).',\r\n    poster:\r\n      \"https://i.pinimg.com/564x/20/07/72/20077235dda89a3c6cb24057355be554.jpg\",\r\n  },\r\n  {\r\n    title: \"Cine mudo\",\r\n    years: [1890,\"-\",1920],\r\n    Parrafo: 'Esta era se caracterizó por la ausencia de diálogos sincronizados. Las películas mudas dependían de la expresión facial, gestos y subtítulos para transmitir la historia. Películas famosas de esta época incluyen \"Viaje a la Luna\" (1902) de Georges Méliès, \"Intolerancia\" (1916) de D.W. Griffith y \"El acorazado Potemkin\" (1925) de Sergei Eisenstein',\r\n    poster:\r\n      \"https://i.pinimg.com/564x/29/bd/a1/29bda14223feadb9b7b83b0452d3b7cd.jpg\",\r\n  },\r\n  {\r\n    title: \"Época dorada de Hollywood\",\r\n    years: [1920,\"-\",1950],\r\n    Parrafo: 'Hollywood se convirtió en la capital mundial del cine durante este período. Las grandes productoras como MGM, Warner Bros. y Paramount Pictures dominaron la industria. Se produjeron grandes éxitos como \"Lo que el viento se llevó\" (1939), \"Casablanca\" (1942), \"Lo que el agua se llevó\" (1952) y \"Cantando bajo la lluvia\" (1952).',\r\n    poster:\r\n      \"https://i.pinimg.com/564x/b2/16/c8/b216c870b2b9174c68cec49621b41e3a.jpg\",\r\n  },\r\n  {\r\n    title: \"Cine sonoro\",\r\n    years: [\"a partir de 1927\"],\r\n    Parrafo: 'La introducción del sonido cambió radicalmente la industria del cine. \"El cantante de jazz\" (1927) fue una de las primeras películas sonoras importantes. El sonido permitió una mayor inmersión del espectador en la narrativa cinematográfica y dio lugar a los primeros musicales como \"Cantando bajo la lluvia\" (1952) y \"El mago de Oz\" (1939).',\r\n    poster:\r\n      \"https://i.pinimg.com/564x/d2/ca/1f/d2ca1f2a43623f90fb62b73155cf63fa.jpg\",\r\n  },\r\n  {\r\n    title: \"Cine negro\",\r\n    years: [1940,\"-\",1950],\r\n    Parrafo: ' También conocido como cine de noir, este género se caracterizaba por su atmósfera oscura, personajes ambiguos y narrativas intrincadas. Ejemplos notables incluyen \"El halcón maltés\" (1941), \"Perdición\" (1944) y \"Laura\" (1944).',\r\n    poster:\r\n      \"https://i.pinimg.com/564x/b0/87/cd/b087cd83542a2f45cadab4e3d26234f9.jpg\",\r\n  },\r\n  {\r\n    title: \"Nueva ola del cine\",\r\n    years: [1950,\"-\",1960],\r\n    Parrafo: 'Surgió en Europa, especialmente en Francia, con directores como François Truffaut, Jean-Luc Godard y Alain Resnais. La Nouvelle Vague desafió las convenciones narrativas y estilísticas establecidas, priorizando la experimentación y la reflexión sobre la condición humana. Películas notables incluyen \"Los 400 golpes\" (1959), \"Al final de la escapada\" (1960) y \"Hiroshima mon amour\" (1959).',\r\n    poster:\r\n      \"http://www.publicacions.ub.edu/bibliotecadigital/cinema/filmhistoria/2004/archivos/nouvelle_vague_5.jpg\",\r\n  },\r\n  {\r\n    title: \"Cine de los 70 y 80\",\r\n    years: [1970,\"-\",1980],\r\n    Parrafo: 'Se produjeron importantes avances en efectos especiales y tecnología cinematográfica durante estas décadas. Directores como Steven Spielberg y George Lucas lideraron la revolución con películas como \"Tiburón\" (1975) y \"Star Wars\" (1977). Otros géneros populares incluyeron el cine de terror con \"El exorcista\" (1973) y el cine de acción con \"Rocky\" (1976) y \"El padrino\" (1972).',\r\n    poster:\r\n      \"https://c8.alamy.com/compes/2m98a4j/georges-perinal-1897-1965-aclamado-director-de-fotografia-frances-trabajando-detras-de-la-camara-en-el-lugar-para-el-primero-de-los-pocos-sus-otras-peliculas-incluyen-bonjour-tristesse-y-la-vida-y-muerte-del-coronel-blimp-2m98a4j.jpg\",\r\n  },\r\n  {\r\n    title: \"Cine de autor \",\r\n    years: [1960, \"al presente\"],\r\n    Parrafo: \" Directores como Stanley Kubrick, Martin Scorsese, Quentin Tarantino y Pedro Almodóvar han dejado una huella indeleble en la historia del cine con sus obras innovadoras y distintivas. Estos cineastas se centran en la expresión personal y la experimentación estilística, desafiando las convenciones del cine comercial.\",\r\n    poster:\r\n      \"https://ladarsenacm.com/wp-content/uploads/2019/07/cine-autor-verano2019-teatro-montalvo-cercedilla-640x640.jpg\",\r\n  },\r\n  {\r\n    title: \"Cine contemporáneo\",\r\n    years: [2000, \"presente\"],\r\n    Parrafo:\r\n      'La llegada del cine digital y las plataformas de streaming han revolucionado la forma en que consumimos películas. El cine contemporáneo abarca una amplia gama de géneros y estilos, desde el cine de superhéroes con el Universo Cinematográfico de Marvel hasta el cine de autor con películas como \"La La Land\" (2016) y \"Parásitos\" (2019).',\r\n    poster:\r\n      \"https://www.cinconoticias.com/wp-content/uploads/cine-de-autor.jpg\",\r\n  },\r\n];\r\n\r\nmodule.exports = historyData\n\n//# sourceURL=webpack://front/./scripts/historyData.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/cardsHistory.js");
/******/ 	
/******/ })()
;