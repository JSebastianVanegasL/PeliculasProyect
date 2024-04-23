require('dotenv').config()
const mongoose = require('mongoose')
const URI =process.env.URI


const db = async ()=>{
    await mongoose.connect(URI)
}

module.exports = db