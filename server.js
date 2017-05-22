var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(socket) {

	app.get('/action', function(req, res) {

		console.log(req.query.gestureType);
		
		socket.emit('gesture', {gesture: req.query.gestureType});
		res.send('response');
	});

	console.log('server running');
});

server.listen(3000);
