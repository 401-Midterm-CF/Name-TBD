'use strict'

const express = require('express')
const app = express();
const userStats = require('./routes/userStats.js')

const quizHandler = require('./routes/quizAPI.js')

app.get('/quiz', quizHandler)
app.get('/userStats', userStats.getallUsers)
app.post('/userStats', userStats.createUser)

module.exports = {
  app,
  start: port => {
    app.listen(port, () => console.log(`listening on ${port}`))
  }
}

