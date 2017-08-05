const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
//const socket = require('socket.io');

const config = require('./config/dbConnect.js');

// Use Node's default promise instead of Mongoose's promise library
mongoose.Promise = global.Promise;

// Connect to the database
mongoose.connect(config.dbConnect);
let db = mongoose.connection;

db.on('open', () => {
  console.log('Connected to the database.');
});

db.on('error', (err) => {
  console.log('Database error: ' + err);
});

// Instantiate express
const app = express();

// Set body parser middleware
app.use(bodyParser.json());

// Enable cross-origin access through the CORS middleware
app.use(cors());

app.get('/',function(req, res){
  res.send('Hello Babloo!');
});
// Initialize routes middleware
app.use('/api/getMovies', require('./routes/getMovies'));

// Use express's default error handling middleware
app.use((err, req, res, next) => {
  if (res.headersSent) return next(err);
  res.status(400).json({ err: err });
});

// Start the server
const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log('Listening on port ' + port);
});
