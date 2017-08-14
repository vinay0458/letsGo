const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
//const sanitizeName = require('string-capitalize-name');

//const movies = require('../models/movies');
//const config = require('../config/dbConnect.js');

// Use Node's default promise instead of Mongoose's promise library
//mongoose.Promise = global.Promise;

// Connect to the database
/*mongoose.connect(config.db);
let db = mongoose.connection;
*/
var Schema = mongoose.Schema;
var moviesSchema = new Schema({
  _id: Schema.Types.ObjectId,
  moviename:  String,
  movieImage: String,
  language:   String,
  isBigMovie: Number,
  rating: Number,
  movieurls: Schema.Types.Mixed,
  MovieDetails: Array
});

var moviesData = mongoose.model('movies', moviesSchema);

// READ

router.get('/', (req, res) => {
  console.log("apiiiiiiii called"); 
  moviesData.find(function(err,data){
  	console.log('data'+data);
  	res.send(data);
  });
});
router.get('/:_id', (req, res) => {
  console.log("apiiiiiiii called id");
  var query = {"_id": req.params._id};
  console.log('query'+query);
  moviesData.find(query, function(err,data){
  	if(err){
  		console.log('Query error'+err);
  	}
  	console.log('data'+data);

  	res.send(data);
  });
});

module.exports = router;
