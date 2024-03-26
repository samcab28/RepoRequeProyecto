/*
para inicializacion automatica del usuario:

npm run dev, declaracion en scrips de package.json

*/

//inicializacion de variables de .env
require('dotenv').config();

//creacion y uso del servidor 
const app = require('./app');

//llamada a la database
require('./database');

//llamada del servidor, ayudar a elegibilidad del codigo
const port = app.get('port');
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
