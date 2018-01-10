const express = require('express');
const db = require('./db');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//models
const lostItem = require('./api/models/LostItem');

//routes
const lostItemRoutes = require('./api/routes/lostItemRoutes');
lostItemRoutes(app);

module.exports = app;
