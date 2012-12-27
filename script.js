alert("hey");
var name = prompt('what\'s your name?');
var $p1El = $('.p1Name');
$p1El.text(name);
console.log('kevin');

var socket = io.connect('http://localhost');
  socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
  });