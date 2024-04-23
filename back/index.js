const app = require('./src/server')
const db = require('./src/config/conDb') 
const PORT = 3000

db().then((res)=>{
    app.listen(PORT,()=> console.log(`Server is listening on port ${PORT}`)
)
})




 