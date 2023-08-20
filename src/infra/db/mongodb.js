const mongoose = require('mongoose')

async function startConnection(){
    await mongoose.connect('mongodb://l27.0.0.1:27017/banco')
    console.log('connected')
}
async function closeConnection(){
    await mongoose.disconnect()
    console.log('disconnected')
}

module.exports ={startConnection, closeConnection}