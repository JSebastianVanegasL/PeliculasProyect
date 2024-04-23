module.exports={
    mode:"development",
    entry:{ 
        index: './scripts/index.js',
        films: './scripts/formulario.js',
        history: './scripts/cardsHistory.js'
       
},

    output: {
        path:__dirname + "/public",
        filename: "[name].js",

    },

};