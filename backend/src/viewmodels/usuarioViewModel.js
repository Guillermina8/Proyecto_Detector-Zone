const UsuarioModel = require('../models/usuarioModel');
const bcrypt = require('bcrypt');

const UsuarioViewModel = {
    registrarUsuario: async (data, callback) => {
        try {
            const passwordEncriptado = await bcrypt.hash(data.password, 10);                                                // Hashear la contraseña

            UsuarioModel.crearUsuario(
                {
                    nombre: data.nombre, telefono: data.telefono, email: data.email,
                    password: passwordEncriptado, fecha_registro: data.fecha_registro,
                    rol: data.rol_default
                }, callback);
        } catch (error) {
            return callback(error);
        }
    }
};

module.exports = UsuarioViewModel;