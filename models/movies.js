const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const validate = require('mongoose-validator');
const config = require('../config/dbConnect');

/*** Define the database model
   * No need to define _id in the schema,
   * If you define it will work fine for get call and will throw an error for post call.
   * _id will be created automatically.
   **/

var Schema = mongoose.Schema;
const moviesSchema = new Schema({
  moviename:  String,
  movieImage: String,
  language:   String,
  isBigMovie: Number,
  rating: Number,
  movieurls: Schema.Types.Mixed,
  MovieDetails: Array
});

const moviesData = module.exports = mongoose.model('movies', moviesSchema);