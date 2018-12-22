/* Primary file for API*/


//Dependencies
var http = require('http');
var url = require('url');

//  This createServer function is run everytime someone requests our App.
// The server should respond to all request with a string
var server = http.createServer(function(req,res) {

  // Get URL and parse it
  var parsedUrl = url.parse(req.url, true);

  // Get the path
  var path = parsedUrl.pathname;
  //this regex trims off slashes from path
  var trimmedPath = path.replace(/^\/+|\/+$/g, '');

  //  Get the query string as an object
  var queryStringObject = parsedUrl.query;

  // Get the HTTP Method
  var method = req.method.toLowerCase();

  // Send the response
  res.end("Hello World\n");

  // Log the request path
  console.log('Request received on path: ' + trimmedPath + ' with method: ' + method + ' and with these query string parameters: ' , queryStringObject);
})


//Start the server, and have it listen on port 3000
server.listen(3000, function() {
  console.log("The server is listening on port 3000");
})
