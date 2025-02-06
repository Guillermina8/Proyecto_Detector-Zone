const conexionDB = require('../config/conexionDB');


const UsuarioModel = {

    crearUsuario: (data, callback) => {
        const rol_default = 1;                                              // Le asigno valor del usuario estándar
        const fecha_registro = new Date().toISOString().split('T')[0];      // Formato YYYY-MM-DD

        // Consulta SQL parametrizada (evita inyecciones SQL)
        const query = `INSERT INTO usuarios (nombre_user, telefono, mail_user, pwd_user, fecha_registro, rol_user) 
        VALUES (?, ?, ?, ?, ?, ?)`; // los ? ?... para prevenir ataques de SQL Injection.

        conexionDB.query(query, [data.nombre, data.telefono, data.email, data.password, fecha_registro, rol_default], callback);
    }
};

module.exports = UsuarioModel;