require('dotenv').load();

var express = require('express');
var app = express();

app.use(express.static('client'));

app.get('/places', function(req, res) {
  res.json([1, 2, 3]);
});

app.listen(3000, function() {
  console.log('ZenefitsCodingChallenge listening on port 3000...');
});

