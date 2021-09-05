//solo necesito esa funcion, asi que uso una desestructuracion.
const { Router } = require('express');

//Controladores de las rutas.
const { 
    usersGet,
    usersPost,
    usersPut,
    usersDelete
} = require('../controllers/user.controllers')

const router = Router();

//Cambié las rutas a /api porque todavia no se como hacer que coexistan html y peticiones api.

//cuando esta ruta estaba en server usaba app.this.post, con router cambio el app.this
//las rutas solo tienen un '/' porque eso se configura en server.js
router.get('/', usersGet);

router.post('/', usersPost);

//detecta el id.
router.put('/:id', usersPut);

router.delete('/', usersDelete);

//sendFile sirve para mandar el archivo, pero se necesita que la ruta sea absoluta, para contruir esa ruta se usar "el __dirname +"<=(Me mandaba a la carpeta models y no podia volver atras)... (Las cosas no funcionan como uno las piensa)
/* router.get('*', (req, res) => {
    //res.sendFile(__dirname+'/public/404.html'); //Error: ENOENT: no such file or directory, stat 'D:\Biblioteca\Proyectos\rest-server\models\public\404.html'
    //root específica el directorio raiz desde el que se sirven los archivos estáticos.
    res.sendFile('404.html', { root: 'public' }); 
}); */

module.exports = router;
//la exporto para usarla fuera.