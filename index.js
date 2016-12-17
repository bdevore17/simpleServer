var express = require('express');
var app = express();

app.get('/', function(request, response) {
  response.send("server test app");
});

if (process.env.LETS_ENCRYPT_PATH && process.env.LETS_ENCRYPT_STRING) {
  app.get(process.env.LETS_ENCRYPT_PATH, function(request, response) {
    response.send(process.env.LETS_ENCRYPT_STRING);
  });
}

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('running on port', port);
});