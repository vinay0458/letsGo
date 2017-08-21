const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const moviesData = require('../models/movies');

// READ

router.get('/', (req, res) => {
  console.log("get movies data");
  moviesData.find(function(err,data){
  	console.log('data'+data);
  	res.send(data);
  });
});

router.get('/:moviename', (req, res) => {
  console.log("get movies with moviename");
  var query = {"moviename": req.params.moviename};
  moviesData.find(query, function(err,data){
  	if(err){
  		console.log('Query error'+err);
  	}
  	res.send(data);
  });
});

router.get('/:_id', (req, res) => {
  console.log("get movies with id");
  var query = {"_id": req.params._id};
  moviesData.find(query, function(err,data){
  	if(err){
  		console.log('Query error'+err);
  	}
  	res.send(data);
  });
});

router.get('/:language', (req, res) => {
  console.log("get movies with language");
  var query = {"language": req.params.language};
  moviesData.find(query, function(err,data){
  	if(err){
  		console.log('Query error'+err);
  	}
  	res.send(data);
  });
});

module.exports = router;
