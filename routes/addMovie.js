const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const sanitizeName = require('string-capitalize-name');

//const movies = require('../models/movies');
//const config = require('../config/dbConnect.js');

// Use Node's default promise instead of Mongoose's promise library
//mongoose.Promise = global.Promise;

// Connect to the database
/*mongoose.connect(config.db);
let db = mongoose.connection;
*/
/*var Schema = mongoose.Schema;
var moviesSchema = new Schema({
  moviename:  String,
  movieImage: String,
  language:   String,
  isBigMovie: Number,
  rating: Number,
  movieurls: Schema.Types.Mixed,
  MovieDetails: Array
});

var addMovieData = mongoose.model('addMovie', moviesSchema);*/
const addMovieData = require('../models/movies');
const app = express();
app.use(bodyParser.json());
// READ
router.post('/', (req, res, next) => {
  console.log("get addMovie data");
  var postMovieRecord = new addMovieData(req.body);
  //var postMovieRecord = req.body;
  console.log('postMovieRecord'+postMovieRecord);
  postMovieRecord.save(function (err, postMovieRecord) {
    console.log("data saving--------------------------------->.........");
    if(err){
      console.log('post error'+err);
      res.send("error in data saving, Try again!");
    }
    res.send("Movie saved successfully");
  });
  /*addMovieData.insert(postMovieRecord, function(err,data){
    if(err){
      console.log('Query error'+err);
      res.send("error in data saving, Try again!");
    }
    res.send("Movie saved successfully");
  });*/
});

module.exports = router;
