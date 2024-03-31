const http = require('http');
const express = require('express');
const path = require('path');
const { Server } = require('socket.io');

const app =  require('./app');
const server = http.createServer(app);
const io = new Server(server);


// Socket.io
io.on('connection', (socket) => {
  console.log('Un nuevo usuario se ha conectado');

  socket.on('user-message', (message) => {
    console.log('Mensaje recibido desde el cliente:', message);
    io.emit('message', message);
  });

  socket.on('disconnect', () => {
    console.log('Un usuario se ha desconectado');
  });
});

// Configura Express para servir archivos estáticos
app.use(express.static(path.resolve('./frontend/proyectos')));

// Ruta para enviar el archivo ForoProdAd.js
app.get('/ForoProdAd', (req, res) => {
  return res.sendFile(path.resolve('./frontend/proyectos/ForoProdAd.js'));
});

server.listen(9000, () => {
    console.log(`Server Started at PORT:9000`)
});
