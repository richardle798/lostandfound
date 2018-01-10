var mongoose = require('mongoose');
mongoose.connect('mongodb://ApoAdmin:LfsGoHeels@ds139884.mlab.com:39884/lost_and_found',{useMongoClient: true});

var conn = mongoose.connection;             
 
conn.on('error', console.error.bind(console, 'connection error:'));
