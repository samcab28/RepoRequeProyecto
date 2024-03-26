//inicializacion de variables de .env
require('dotenv').config();

//creacion y uso del servidor 

const app = require('./app');

//llamada a la database
require('./database');

//llamada del servidor, ayudar a elegibilidad del codigo
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

