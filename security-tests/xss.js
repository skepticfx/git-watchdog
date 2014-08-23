// XSS Commit Checker
// If the file type if ejs and has <%- in it, 
// We assume that it needs to be taken care for manual analysis
// Just report it using the event.

var events = require('events');

exports.scan = function(diff){
  // Every module has to return an event emitter object.
  
  var event = new events.EventEmitter();
  diff.forEach(function(file){
    // Only interested in files with .ejs as extension
    if(file.fileExtension !== 'ejs')
      return;
    file.additions.forEach(function(addition){
      console.log('File extension with ejs found');
      if(addition.match(/<%-/gi) !== null){
        console.log('Compare: ' + addition.match(/<%-/gi));
        event.emit('report', 'XSS in ' + addition);
        event.lol = 'test';
      }
    });
  });

return event;
}


