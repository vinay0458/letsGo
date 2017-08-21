const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
//const socket = require('socket.io');

// Instantiate express
const app = express();

// Set body parser middleware
app.use(bodyParser.json());

// Enable cross-origin access through the CORS middleware
app.use(cors());
// Start the server
const port = process.env.PORT || 3000;

app.listen(port, (err) => {
	if (err) {
		return console.log('something bad happened', err);
	}
  console.log('Listening on port ' + port);
});

//DB connection
const config = require('./config/dbConnect.js');

// Use Node's default promise instead of Mongoose's promise library
//mongoose.Promise = global.Promise;

// Connect to the database
mongoose.connect(config.db);
let db = mongoose.connection;

db.on('error',console.error.bind(console,'connection error:'));
db.once ('open', function() {
	console.log('Connected to the database.');
});

app.get('/',function(req, res){
  res.send('Hello Babloo!');
});
/*app.get('/api/getMovies',function(req, res){
	console.log('testing');
  var db = req.db;
    var collection = db.get('movies');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});*/
// Initialize routes middleware
app.use('/api/getMovies', require('./routes/getMovies'));
/*app.post('/api/addMovie',function(req, res){
  res.send('Hello Babloossss!');
});*/
app.use('/api/addMovie', require('./routes/addMovie'));
//app.use('/test', require('./routes/test'));

// Use express's default error handling middleware
app.use((err, req, res, next) => {
  if (res.headersSent) return next(err);
  res.status(500).send('Something Broke'+ err);
});


