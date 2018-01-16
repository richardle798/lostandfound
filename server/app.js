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
const loggedItem = require('./api/models/LoggedItem');
const foundItem = require('./api/models/FoundItem');

//routes
const lostItemRoutes = require('./api/routes/lostItemRoutes');
const loggedItemRoutes = require('./api/routes/loggedItemRoutes');
const foundItemRoutes = require('./api/routes/foundItemRoutes');

lostItemRoutes(app);
loggedItemRoutes(app);
foundItemRoutes(app);

module.exports = app;
