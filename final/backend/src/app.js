//definicion del servidor y codigo basico
const express = require('express');
const cors = require('cors');
const app = express();


//------------------------------------------------------------------------------
//settings 
app.set('port', process.env.PORT || 4000);

//------------------------------------------------------------------------------
//middlewares
//funciones antes de que lleguen a las rutas

//usada para el uso de varios servidores al tiempo, conexion fronend - backend
app.use(cors());

//usada para el uso de archivos formato .json
app.use(express.json());

//------------------------------------------------------------------------------
// routes
app.get('/api/users',(req,res) => res.send('users routes'));
app.get('/api/notes',(req,res) => res.send('notes routes'));


module.exports = app;