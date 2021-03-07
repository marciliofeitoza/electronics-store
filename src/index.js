const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://feitoza:f24software@cluster0.rudqr.mongodb.net/electronics-store?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true,
})

app.use(express.json())
app.use(routes)

app.listen(3333)