import socketio from 'socket.io';

let io;
const connections = [];

function setupWebSocket(server) {
  io = socketio(server);

  io.on('connection', socket => {
    connections.push({
      id: socket.id,
    })
  });
};

function findConnections() {
  return connections;
};

function sendMessage(to, message, data) {
  to.forEach(connection => {
    io.to(connection.id).emit(message, data);
  });
};

export {
  setupWebSocket,
  findConnections,
  sendMessage
};