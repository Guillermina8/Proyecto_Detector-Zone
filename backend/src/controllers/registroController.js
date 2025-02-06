const UsuarioViewModel = require('../viewmodels/usuarioViewModel');


// Exporto la función req son los datos que se reciben del user y res es la respusta del front confirma o indica error. 
module.exports.registro = (req, res) => {
    const { nombre, telefono, email, password } = req.body;

    // Validación de campos obligatorios
    if (!nombre || !email || !password) {
        return res.status(400).json({
            message: 'Los campos de nombre de usuario, correo electrónico y contraseña son obligatorios.'
        });
    }

    // Llamo a la función de registro de usuario
    UsuarioViewModel.registrarUsuario({ nombre, telefono, email, password }, (error, result) => {
        if (error) {
            return res.status(500).json({
                message: 'Error al registrar el usuario' + error,
                error: error
            });
        }
        res.status(201).json({
            message: 'Usuario registrado con éxito',
            result: result
        });
    });
};