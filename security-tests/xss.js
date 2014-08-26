// XSS Commit Checker
// If the file type if ejs and has <%- in it,
// We assume that it needs to be taken care for manual analysis
// Just report it using the event.

var events = require('events');

// report as many times as you want
exports.scan = function(diff, report){

  diff.forEach(function(file){
    // Only interested in files with .ejs as extension
    if(file.fileExtension !== 'ejs')
      return;
    file.additions.forEach(function(addition){
      if(addition.match(/<%-/gi) !== null || addition.match(/{{{/gi) !== null){
        report( 'XSS in ' + addition);
      }
    });
  });

return;
}
