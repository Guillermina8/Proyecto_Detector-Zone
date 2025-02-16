const UsuarioModel = require('../models/usuarioModel');

const UsuarioViewModel = {

    registrarUsuario: (data, callback) => {
        try {
            UsuarioModel.crearUsuario(
                {
                    nombre: data.nombre, telefono: data.telefono, email: data.email,
                    password: data.password, fecha_registro: data.fecha_registro,
                    rol: data.rol_default
                }, callback);
        } catch (error) {
            return callback(error);
        }
    },

    loginUsuario: (data, callback) => {

        UsuarioModel.loginUsuario(data.email, data.password, (error, result) => {

            console.log('result', result);  
              
            if (error) {
                    return callback(error);
                }
                if (result.length === 0) {
                    return callback(null, { error: "Usuario no encontrado" });
                }

                if (data.password !== result[0].pwd_user){
                    return callback(null, { error: "Contraseña incorrecta" });
                } 

            callback(null, { message: "Inicio de sesión exitoso", result: result[0] });
        });
}};

module.exports = UsuarioViewModel;
