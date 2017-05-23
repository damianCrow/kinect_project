var socket = io.connect('http://localhost:3000');

// socket.on('disconnect', function() {

//     socket.connect('http://localhost:3000', {
//       reconnection: false
//   });
// });

var rotation = 0;
var interactionOn = false;
$('.indicator').html('OFF');

socket.on('gesture', function(data) {

  console.log(data);

  if(data.gesture === 'WAVE_HAND') {

    if(interactionOn === false) {

      interactionOn = true;
      $('.indicator').html('ON');
      return;
    }
    else {

      interactionOn = false;
      $('.indicator').html('OFF');
      return;
    }  
  }

  if(interactionOn) {

    if(data.gesture === 'SWIPE_LEFT') {

      $('#previous').click();
    }

    if(data.gesture === 'SWIPE_RIGHT') {

      $('#next').click();
    }

    if(data.gesture === 'SWIPE_UP') {

      rotation += 90;

      $('._3dbox').css({transform: 'translateX(140px) rotateX('+rotation+'deg)'});
    }

    if(data.gesture === 'SWIPE_DOWN') {

      rotation -= 90;
      
      $('._3dbox').css({transform: 'translateX(140px) rotateX('+rotation+'deg)'});
    }
  }
  // socket.emit('my other event', { my: 'data' });
});