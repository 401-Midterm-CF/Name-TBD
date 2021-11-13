'use strict'

const express = require('express')
const app = express();

const quizHandler = require('./routes/quizAPI.js')

app.get('/quiz', quizHandler)

module.exports = {
  app,
  start: port => {
    app.listen(port, () => console.log(`listening on ${port}`))
  }
}

