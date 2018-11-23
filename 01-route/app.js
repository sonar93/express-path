const express = require('express')
const path = require('path')
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', require('./routes/index'))

app.use((req, res, next) => {
    let err = new Error('Not found')
    res.status = 404
    next(err)
})