const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const validate = require('mongoose-validator');
const config = require('../config/dbConnect');

// Define the database model
const moviesSchema = new mongoose.Schema({
  moviename: {
    type: String,
    required: [true, 'moviename is required.'],
    validate: movienameValidator
  },
  movieImage: {
    type: String,
    required: [true, 'movieImage is required.'],
    unique: true,
    validate: movieImageValidator
  },
  language: {
    type: String,
    validate: languageValidator
  },
  isBigMovie: {
    type: Boolean,
    validate: isBigMovieValidator
  },
  rating: {
    type: Number,
    validate: ratingValidator
  },
  movieurls: {
    type: Object,
    validate: movieurlsValidator
  },
  MovieDetails: {
    type: Object,
    validate: MovieDetailsValidator
  }
});

// Use the unique validator plugin
moviesSchema.plugin(unique, { message: 'That {PATH} is already taken.' });

const movies = module.exports = mongoose.model('movies', moviesSchema);
