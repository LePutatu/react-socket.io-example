import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');

function subscribeToTimer(cb) {
  socket.on('timer', timestamp => cb(null, timestamp));
  socket.emit('subscribeToTimer', {
    someJSON:{
      value1:1,
      value2:2,
      value3:4
    },
    localInterval:1000
  });
}
export { subscribeToTimer };
