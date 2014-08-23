var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});


// Da hook
router.post('/', function(req, res) {
  var result = {};
  result.success = true;
  result.request = req.body;
  res.json('200', result);
});


module.exports = router;
