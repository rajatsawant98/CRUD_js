const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/AlienDBex2'

const app = express()

mongoose.connect(url, {useNewUrlParser : true})

const con = mongoose.connection 

con.on('open', () => {
    console.log('connected...');
})

app.use(express.json()) 

const alienRouter = require('./routes/aliens2')
app.use('/aliens2', alienRouter)

app.listen(8080, () => {
    console.log('Server Started');
})