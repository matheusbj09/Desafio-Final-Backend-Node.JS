const app = require('./app')
const port = process.env.SERVER_PORT

app.listen(port,()=>{
    console.log(`exemple app listening on port ${port}`)
})