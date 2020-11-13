import socketIOClient from 'socket.io-client';

export const SERVER_BASE_URL = 'http://localhost:3000';

export const socket = socketIOClient(SERVER_BASE_URL, {
  transports: ["websocket"],
});