/*
para inicializacion automatica del usuario:

npm run dev, declaracion en scrips de package.json

*/
//inicializacion de variables de .env
/*require('dotenv').config();

//creacion y uso del servidor 
const app = require('./app');

//llamada a la database
require('./database');

//llamada del servidor, ayudar a elegibilidad del codigo
const port = app.get('port');
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});*/
// Requiere el archivo socket.js
require('./socket');

// Requiere los módulos necesarios
const express = require('express');
const app = require('./app');
const path = require('path');

// Configura otras configuraciones del servidor y rutas aquí

// Configura Express para servir archivos estáticos
app.use(express.static(path.resolve('./frontend/proyectos')));

// Ruta para enviar el archivo ForoProdAd.js
app.get('/ForoProdAd', (req, res) => {
  return res.sendFile(path.resolve('./frontend/proyectos/ForoProdAd.js'));
});

//llamada a la database
require('./database');

const port = app.get('port');
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


