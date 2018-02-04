const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const loginData = require('../models/login');

// READ

var columnsToShow = {'_id': 0, 'firstName': 1, 'lastName':1, 'mobile': 1};
/*router.get('/', (req, res) => {
  console.log("post sign up data");
  loginData.find({}, columnsToShow ,function(err,data){
  	console.log('data'+data);
  	res.send(data);
  });
});
*/
router.post('/login', function (req, res, next) {
  // confirm that user typed same password twice

  if (req.body.firstname &&
    req.body.lastname &&
    req.body.mobile) {

    var loginData = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      mobile: req.body.mobile,
    }
  }
});


module.exports = router;
