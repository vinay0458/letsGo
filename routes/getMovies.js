const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
//const sanitizeName = require('string-capitalize-name');

const movies = require('../models/movies');


// READ
router.get('/', (req, res) => {
  // If query string is provided, send that specific movie
  if (req.query.id) {
    movies.findById(req.query.id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(400).json({ success: false, msg: 'No such movie.' });
    });
    return; // Skip the remaining code below
  }

  // Send them all if no query string is provided
  movies.find({})
  .then((result) => {
    res.json(result);
  });

});

module.exports = router;
