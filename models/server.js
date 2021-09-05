const express = require('express');

//NOTA: paquete cors, sirve para que las peticiones vengan de url que nosotros designemos, sirve como seguridad
//Es un middleware, no olvidarme.

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT; //Hago uso de la variable de entorno que estan en .env
        this.usuariosPath = '/api/user'; //Esto sirve para que una persona que no conoce mi codigo pueda ver rapidamente mis rutas.

        //Middlewares.
        this.middlewares();

        //Rutas de mi aplicacion.
        this.routes();
    };

    middlewares() {
        //Directorio publico. Servir contenido estático.
        this.app.use(express.static('public'));

        //lectura del body, reconoce archivos JSON.
        this.app.use(express.json());

        //cors
        /* this.app.use(cors()); //para tenerlo en cuenta a futuro. (Hay que descargar e importar) */
    }

    routes() {
        //Esto es un middleware que llamada a las rutas.
        this.app.use(this.usuariosPath, require('../routes/user.routes')) //Primer argumento designa la ruta de la url, el segundo el importa las rutas de la carpeta routes.


    };

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        });
    };

};

module.exports = Server;