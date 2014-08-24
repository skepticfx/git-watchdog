var xss = require('./xss.js');
var request = require('request');
var reportUrl = "http://requestb.in/vlxc0jvl?data=";

function report(data){
  // Use email, in-house logging server etc here
  console.log('report received');
  console.log(data);
  request(reportUrl +  encodeURIComponent(data).toString());
}

exports.run = function(diff){

   xss.scan(diff, report);

return;
}



/*
Sample Diff format

[ { additions: [ '"start": "node ./bin/www",', '"test": "mocha ./test/*.js"' ],
    deletions: [ '"start": "node ./bin/www"' ],
    fileExtension: 'json',
    a: 'package.json',
    b: 'package.json' },
  { additions:
     [ 'A simple html page.',
       'Nothing much here.',
       'See how Git Hooks send mutliple lines from  ...' ],
    deletions: [ '-- /dev/null' ],
    fileExtension: 'ejs',
    b: 'views/good.ejs' },
  { additions: [ '... multiple files.' ],
    deletions: [ '-- /dev/null' ],
    fileExtension: 'ejs',
    b: 'views/good2.ejs' } ]

.b -> Filename
.additions -> Array of addition strings
*/