alert("hey");
var name = prompt('what\'s your name?');
var $p1El = $('.p1Name');
$p1El.text(name);
console.log('kevin');

var socket = io.connect();
socket.on('message', function (data) {
  console.log(data);
});

