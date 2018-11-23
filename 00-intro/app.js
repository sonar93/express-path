let express = require('express')
let app = express()

app.all('/', (req, res, next) => {
    console.log('Working every time and sending the request to next')
    next()
})

app.get('/', (req, res) => {
    res.send('Data sent')
})

app.get('/:id', (req, res) => {
    let id = req.params.id
    res.send('Sent data from ID param')
})

app.post('/', (req, res) => {
    res.send('recieved Post')
})

app.put('/', (req, res) => {
    res.send('recieved put')
})

app.patch('/', (req, res) => {
    res.send('recieved patch')
})

app.delete('/', (req, res) => {
    res.send('recieved delete')
})

app.listen(3000)