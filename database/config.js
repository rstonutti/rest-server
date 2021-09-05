const mongoose = require('mongoose');

const dbConecction = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CNN);
        console.log('Base de datos online');
    } catch (error) {
        console.log(error);
        throw new Error('Erro a la hora de iniciar la base de datos');
    }
};

module.exports = {
    dbConecction
};