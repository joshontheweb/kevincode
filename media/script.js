var $chatLog = $('.chatlog');
var $chatIn= $('.chat-input');
var $chatSub = $('.chat-submit');

var name = prompt("Name?")

var submitFunc = function() {
	var print = $chatIn.val();
	socket.emit('message', {name: name, message: print});
	$chatIn.val('');
}

$chatSub.click(submitFunc)

$chatIn.keypress(function(e) {
	if (e.keyCode === 13) {
		submitFunc();
	}
});



var socket = io.connect();
socket.on('message', function (data) {
  $chatLog.prepend('<li>' + data.name + ': ' + data.message + '</li>'); //<li> = "list item"
});

