const mongoose = require('mongoose');
const config = require('./app/config');
const db = mongoose.createConnection(config.dataBaseURL, { useNewUrlParser: true });

module.exports = db;
