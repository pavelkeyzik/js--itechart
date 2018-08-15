const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(routes);
app.use('/assets', express.static(path.resolve(__dirname, '../public')));

module.exports = app;
