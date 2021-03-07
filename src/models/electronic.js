const mongoose = require('mongoose')

const ElectronicSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true
    },
    preco: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Electronic', ElectronicSchema)