import socketio from 'socket.io-client';

const socket = socketio('http://52.45.46.210:3333', {
  autoConnect: false,
});

function subscribeToNewPoint(subscribeFunction) {
  socket.on('new-point', subscribeFunction);
}

function connect() {
  socket.connect();
}

function disconnect() {
  if(socket.connected) {
    socket.disconnect();
  }
}

export {
connect,
  disconnect,
  subscribeToNewPoint,
};