const express = require('express');
const db = require('./db');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

//models
const lostItem = require('./api/models/LostItem');

//routes
const lostItemRoutes = require('./api/routes/lostItemRoutes');
lostItemRoutes(app);

module.exports = app;
