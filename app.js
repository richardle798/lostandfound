var express = 	require('express');
var app = express();
var db = require('./db');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//models
var lostItem = require('./api/models/LostItem');

//routes
var lostItemRoutes = require('./api/routes/lostItemRoutes');
lostItemRoutes(app);

module.exports = app;
