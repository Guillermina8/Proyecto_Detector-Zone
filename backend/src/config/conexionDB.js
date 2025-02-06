// Importo el módulo mysql2                                                una versión mejorada del paquete original mysql para Node.js
const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'MySQL',                                                       //Si este código va a producción,utilizaría una variables de entorno .env
    database: 'detector_zone'
});

//Conecto a BBDD
connection.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('Conexión establecida con la base de datos');
});
// Exporto BBDD
module.exports = connection;