var express = require('express');
var app = express();
var map = require("./Frequency");
//var mustache = require('mustache');
var mustacheExpress = require('mustache-express');

// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());

app.set('engine', 'mustache');
//app.set('views', './views');


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.render("./index/index.mustache");
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});