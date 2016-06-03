require('dotenv').load();

var request = require('then-request');

var express = require('express');
var app = express();

app.use(express.static('client'));

app.get('/places', function(req, res) {
  var keyword = req.query.keyword;
  var location = req.query.location;
  request('GET', 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
    {
      qs: {
        key: process.env.GOOGLE_PLACES_API_KEY,
        location: location,
        radius: 30000,
        keyword: keyword
      }
    }
  )
  .done(function(data) {
    if (data.statusCode === 200) {
      return res.json(JSON.parse(data.body));
    }
    res.sendStatus(404);
  })
});

app.listen(3000, function() {
  console.log('Ask Google Places listening on port 3000...');
});

