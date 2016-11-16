var express = require('express');
var app = express();

app.get('/', function(request, response) {
  response.send("flynn test app");
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('running on port', port);
})
