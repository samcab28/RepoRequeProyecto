/*
para inicializacion automatica del usuario:

npm run dev, declaracion en scrips de package.json

*/
//inicializacion de variables de .env
/*require('dotenv').config();
const app = require('./app');

//llamada a la database
require('./database');

//llamada del servidor, ayudar a elegibilidad del codigo
const port = app.get('port');
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});*/

//inicializacion de variables de .env
require('dotenv').config();

const express = require('express');
const app = require('./app');
const http = require('http');
const { Server } = require("socket.io");
const cors = require('cors');
app.use(cors());

const mongoose = require('mongoose');
const messageRouter = require('./routes/MessageRoute');
// Middleware para parsear JSON en las solicitudes
app.use(express.json());

// Rutas para los mensajes
app.use('/api/messages', messageRouter);

//llamada a la database
require('./database');

//llamada del servidor, ayudar a elegibilidad del codigo
const port = app.get('port');

const server = http.createServer(app);
const io = new Server(server, {
    cors: {origin:"http://localhost:3000", methods: ["GET", "POST"]},
});

io.on("connection", (socket) => {
  console.log(`a user connected ${socket.id}`);
  
  socket.on("send_message", (data) => {
    console.log("ENVIADO");
    socket.emit("receive_message", data); // se debe usar el socket.emit en lugar del socket.broadcast.emit, ya que yo quiero recibir el mensaje y se vea en pantalla
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = { port };
/*app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});*/


