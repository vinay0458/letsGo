const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const deleteMovieData = require('../models/movies');

const app = express();

app.use(bodyParser.json());
// READ
/** http://localhost:3000/api/deleteMovieRecord?moviename=fidaa
  * make sure no space before and after fidaa moviename
  * No need to create an object of schema. 
  */
router.post('/', (req, res, next) => {
  console.log("Delete movie record");
  var deletemovie = {moviename:req.query.moviename};
  deleteMovieData.remove(deletemovie, function (err, deleteMovieRecord) {
    if(err){
      console.log('Error in deleting record !'+ err );
      res.send({
        "payload": {
          "errors":JSON.stringify(err)
        }
      });
    } else {
      var response = {
        message: "Record deleted successfully"
      };
      res.send(response);
    }
  });
});

module.exports = router;
