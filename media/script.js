alert("hey");
var chat = prompt('what\'s your name?');
var $chatLog = $('.chatlog');
var $chatIn= $('.chat-input');
var $chatSub = $('.chat-submit');

$chatSub.click(function() {
	var print = $chatIn.val();
	socket.emit('message', print);
	$chatIn.val('');
})
console.log('kevin');

var socket = io.connect();
socket.on('message', function (data) {
  $chatLog.prepend('<li>' + data + '</li>'); //<li> = "list item"
});

