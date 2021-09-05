//En MongoDB a diferencia de bases SQL, los datos se guardan en objetos tambien conocidos como documentos. Estos documentos se guardan en colecciones (las colecciones son como las tablas en las bases SQL)
//El modelo ayuda a manejar esa información propiamente y que todos los registros luzcan como se esperan

const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    estado: {
        type: Boolean, 
        default: true
    },
    nombre: {
        type: String, 
        required: [true, 'El nombre es obligatorio']
    },
    contrasenia: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    }
});

module.exports = model('User', UserSchema);