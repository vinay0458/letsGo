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
  moviename: {
    type: String,
    required: [true, 'moviename is required.']
  },
  movieImage: {
    type: String,
    required: [true, 'movieImage is required.']
  },
  language: {
    type: String,
    required: [true, 'language field is required.']
  },
  isBigMovie: {
    type: Number,
    required: [true, 'movieType field is required.']
  },
  rating: {
    type: Number,
    required: [true, 'rating field is required.']
  },
  movieurls: {
    type: Schema.Types.Mixed,
    required: [true, 'movieurls are required.']
  },
  MovieDetails: {
    type: Array,
    required: [true, 'MovieDetail fields are required.']
  }
});

const moviesData = module.exports = mongoose.model('movies', moviesSchema);