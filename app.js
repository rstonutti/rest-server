//Exportaciones propias de Node van primero.
require('dotenv').config(); //Establezco mis variables de entorno.
//Exportaciones de tercero van despues.
const Server = require('./models/server'); //Exporto server de los modelos.

//Creo una nueva instancia del servidor.
const server = new Server();

//Lanzo mi servidor.
server.listen();

 


