//Esto lo exporto para que me autocomplete las opciones de las respuestas de expres, es redundante.
const { response, request } = require('express');

const User = require('../models/user');

const usersGet = (req = request, res = response) => {

    //la query es la informacion que se manda en la url.
    const { nombre, apellido } = req.query;

    res.json({
        msg: 'Esto es una peticion GET desde controller',
        nombre,
        apellido
    });
};

const usersPost = async(req = request, res = response) => {

    const body = req.body;
    const user = new User(body);

    await user.save()

    res.json({
        msg: 'Esto es una peticion POST desde controller',
        user
    });
};

const usersPut = (req = request, res = response) => {

    //El id viene en los parametros de la request.
    const { id } = req.params;

    res.json({
        msg: 'Esto es una peticion PUT desde controller',
        id
    });
};

const usersDelete = (req = request, res = response) => {
    res.json({
        msg: 'Esto es una peticion DELETE desde controller'
    });
};

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete
};
//como son muchos controladores se exportan en forma de objeto.