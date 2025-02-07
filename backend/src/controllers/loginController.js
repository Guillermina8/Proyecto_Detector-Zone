const UsuarioViewModel = require('../viewmodels/usuarioViewModel');

// Exporto la Función  para el inicio de sesión 
module.exports.login = (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json(
            { error: "Email y contraseña son obligatorios" }
        );
    }
    
    try {
        UsuarioViewModel.loginUsuario({ email, password }, (error, result) => {   // Llamo a la función de inicio de sesión
            
            if (error) {
                return res.status(500).json({
                    message: 'Error al iniciar sesión: ' + error,
                    error: error
                });
            }       

            if (result.error) {
                return res.status(401).json({
                    message: error
                });
            } 
            
            res.status(200).json(result);  // Envía la respuesta en caso de éxito
            res.body = result;  
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error interno con el servidor' + error,
            error: error
        });
    }
};
