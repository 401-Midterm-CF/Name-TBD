const mongoose = require('mongoose')

const userStatsSchema = new mongoose.Schema({
  user: {type: String},
  easyAnswers: {type: String},
  mediumAnswers: {type: String},
  hardAnswers: {type: String},
  totalAnswers: {type: String},
})

const userStats = mongoose.model('userStats', userStatsSchema);
module.exports = userStats;