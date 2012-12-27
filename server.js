var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io');

app.use('/media', express.static(__dirname + '/media'));

app.get('/', function(req, res){
  res.sendfile('index.html');
});

app.get('/pickles', function(req, res){
  res.send('pickles are good');
});

server.listen(80);

var sio = io.listen(server);

sio.sockets.on('connection', function (socket) {
	console.log('a socket connected!');
    socket.on('message', function(data) {
      console.log(data);
    });
});

