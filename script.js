var socket = io.connect('http://localhost:3000', {
    reconnection: false
});

socket.on('disconnect', function() {

    socket.connect('http://localhost:3000', {
      reconnection: false
  });
});

socket.on('gesture', function(data) {

  console.log(data);

  if(data.gesture === 'SWIPE_LEFT') {

    $('#previous').click();
  }
  if(data.gesture === 'SWIPE_RIGHT') {

    $('#next').click();
  }
  socket.emit('my other event', { my: 'data' });
});