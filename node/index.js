const express = require('express')
const http = require('http')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello from node!')
})

http.createServer(app).listen(1337, _ => {
  console.log('server started')
})