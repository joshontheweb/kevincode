var express = require('express');
var app = express();
var io = require('socket.io');

app.use(express.static(__dirname + '/media'));

app.get('/', function(req, res){
  res.sendfile('index.html');
});

app.get('/pickles', function(req, res){
  res.send('pickles are good');
});

app.listen(80);

var sio = io.listen(app);

sio.sockets.on('connection', function (socket) {
	console.log('a socket connected!');
});