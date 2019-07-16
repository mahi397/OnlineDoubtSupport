var express = require('express');
var http = require('http');
var socketIO = require('socket.io');

var app = express();
var httpServer = http.Server(app);
var ioServer = socketIO(httpServer);

app.use(express.static(__dirname + '/public'))

function httpServerConnected(){
    console.log('Http server started');
}

function ioServerConnected(){
    console.log('A new socket connection');
}

httpServer.listen(5001, httpServerConnected);
ioServer.on('connection', ioServerConnected);


