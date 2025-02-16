import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';


const app = express();
const server = createServer(app);
const io = new Server(server, {cors: {
  origin: "http://localhost:3000",
}});


io.on('connection', (socket: any) => {
  console.log('a user connected');
  console.log(`see socket`, socket?.id)

  socket.on("foo", (msg: any) => {
    console.log(`received message from foo"`, msg)
  })

  socket.on("create-something", (msg: any) => {
    console.log(`received message from create something"`, msg)
  })

  socket.on("pi", (msg: any) => {
    console.log(`received message from pi"`, msg)
  })

  socket.on("disconnect", () => {
    console.log("user disconnected");
  })
});



server.listen(4000, () => {
  console.log('server running at http://localhost:4000');
});