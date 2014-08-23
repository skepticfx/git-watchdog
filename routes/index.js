var express = require('express');
var router = express.Router();
var different = require('different');
var debug = require('debug')('hook');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});


// Da hook
router.post('/', function(req, res) {
  var result = {};
  result.success = true;
  result.request = req.body;
  var commit;
  
  debug('Got POST request');
  
  if(req.body.head_commit){
    debug('found head commit');
    commit = req.body.head_commit;    
    debug(commit.url.toString() +'.diff');
    different.parseDiffFromUrl(commit.url.toString() +'.diff', function(diff) { 
      console.log(diff);
      result.diff = diff;
      res.json(200, result);
    });
    
  } else {
    res.json('200', result);
  }
});


module.exports = router;
