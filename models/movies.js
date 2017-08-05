const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const validate = require('mongoose-validator');
const config = require('../config/db');

// Define the database model
const moviesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required.'],
    validate: nameValidator
  },
  email: {
    type: String,
    required: [true, 'Email is required.'],
    unique: true,
    validate: emailValidator
  },
  age: {
    type: Number,
    validate: ageValidator
  },
  gender: {
    type: String,
    validate: genderValidator
  }
});

// Use the unique validator plugin
moviesSchema.plugin(unique, { message: 'That {PATH} is already taken.' });

const movies = module.exports = mongoose.model('movies', moviesSchema);
