//Express, Request, Cheerio
var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

//Route
app.get('/', function (req, res) {
   res.send('Testing');
});

// Port Listening
app.listen(5000, function () {
    console.log('Listening to port: 5000');
});
