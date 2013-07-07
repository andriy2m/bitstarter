var express = require('express');

var app = express.createServer(express.logger());

var file_name = "index.html";
var res_text = fs.readFileSync( file_name ).toString();

app.get('/', function(request, response) {
  response.send(res_text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});