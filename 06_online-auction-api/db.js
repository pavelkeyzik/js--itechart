const mongoose = require('mongoose');
const config = require('./app/config');
const db = mongoose.createConnection(config.dataBaseURL);

module.exports = db;
