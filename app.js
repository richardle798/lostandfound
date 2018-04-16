const express = require('express');
const db = require('./db');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('combined'));

// Redirect all HTTP traffic to HTTPS
function ensureSecure(req, res, next){
    if(req.headers["x-forwarded-proto"] === "https"){
      // OK, continue
      return next();
    };
    res.redirect('https://'+req.hostname+req.url); // handle port numbers if you need non defaults
  };

if(process.env.NODE_ENV === 'development'){
    app.use(cors());
}
else{
    app.all('*', ensureSecure);
    app.use(express.static('dist'));
}

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
