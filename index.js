'use strict'
require('dotenv').config();
const app = require('./lib/server.js');
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose')
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)

app.start(PORT)