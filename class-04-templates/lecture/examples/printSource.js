// Note: this is TOTALLY OPTIONAL to even review
// It's just a handy little utility script to view HTML that was created from a template
// The teachers use it mainly for creating code snippets for slides

// Use this script to print HTML that was rendered with jQuery or handlebars.
// Because you can't just save it from the browser
// npm -g install phantomjs
// and then for example:
// phantomjs printSource.js http://127.0.0.1:8080/04-handlebars.html

var system = require('system');
var page   = require('webpage').create();
// system.args[0] is the filename, so system.args[1] is the first real argument
var url    = system.args[1];
// render the page, and run the callback function
page.open(url, function () {
  // page.content is the source
  console.log(page.content);
  // need to call phantom.exit() to prevent from hanging
  phantom.exit();
});
