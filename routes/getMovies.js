const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
//const sanitizeName = require('string-capitalize-name');

//const movies = require('../models/movies');
const config = require('../config/dbConnect.js');

// Use Node's default promise instead of Mongoose's promise library
mongoose.Promise = global.Promise;

// Connect to the database
mongoose.connect(config.db);
let db = mongoose.connection;


// READ

router.get('/', (req, res) => {
  console.log("apiiiiiiii called"); 
    db.collections('movies', function(err, obj){
      if (err) return next(err);
      res.send(obj);
    });
});


module.exports = router;
