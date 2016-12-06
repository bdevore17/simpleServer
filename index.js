var express = require('express');
var app = express();

app.get('/', function(request, response) {
  response.send("flynn test app");
});

app.get('/.well-known/acme-challenge/RiPIzfn4N13RzMvxwyZ59je-Crr2hep4uhuMpRAOV6k', function(request, response) {
  response.send("RiPIzfn4N13RzMvxwyZ59je-Crr2hep4uhuMpRAOV6k.vw09nxnidQigwrCaf_GliJd0YEsPfYVZx6qltjohDUE");
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('running on port', port);
})
