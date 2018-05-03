//Express 
var express = require('express');
var app = express();

//Route
app.get('/', function (req, res) {
   res.send('Testing');
});

// Port Listening
app.listen(5000, function () {
    console.log('Listening to port: 5000');
});
