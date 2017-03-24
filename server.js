// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

var request = require('request');
var appid = process.env.APPID;
var appkey = process.env.APPKEY;
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

var options = {
  uri: 'https://api.schiphol.nl/public-flights/flights?app_id='+appid+'&app_key='+appkey+'&page=0',
  method: 'GET',
  headers: {
    'ResourceVersion':'v3', //extra header needed for calls to Schiphol 
  }
};
var flights = [];
console.log("flights called, flights length "+flights.length);

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/flights", function (request, response) {
  //console.log("flights called, flights length "+flights.length);
  response.json(flights);
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

request.get(options, function(error, response, body) {
  //console.log(typeof body, body.substr(0,50));
  flights = JSON.parse(body);
});