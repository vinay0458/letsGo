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

const loginSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'first name']
  },
  lastName: {
    type: String,
    required: [true, 'last name']
  },
  mobile: {
    type: Number,
    required: [true, 'mobile number field is required.']
  }
});

const loginData = module.exports = mongoose.model('login', loginSchema);