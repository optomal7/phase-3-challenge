const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Welcome to math-basic, try some routes! (We suggest /zero /add /subtract and /double/:number)')
})

app.get('/zero', function (req, res) {
  res.send('0')
})

app.get('/add', function (req, res) {
  res.send(String(Number(req.query.a) + Number(req.query.b)))
})

app.get('/subtract', function (req, res) {
  res.send(String(Number(req.query.a) - Number(req.query.b)))
})

app.get('/double/:number', function(req, res) {
  res.send(String(req.params.number * 2))
})

app.listen(3000, function () {
  console.log('listening on port 3000!')
})
