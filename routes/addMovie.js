const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

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
      console.log('post error'+err.message);
      res.send({
        "payload": {
          "errors":JSON.stringify(err)
        }
      });
    } else {
      res.send("Movie saved successfully");
    }
  });
});

module.exports = router;
