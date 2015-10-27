var http = require('http');
var greeting = require('./greeting');
var names = require('./names');
var sum = require('./sumOfNumbers');

http.createServer(function(request, response){
    response.writeHead(200);
    response.write(names.scott());
    response.end();
}).listen(8000);

/*
var express = require('express');
var app = express();

app.listen(8000);

app.get("/", function(req, res, next){
    res.send("Hello Zeta");
});
 */

module.exports = http;