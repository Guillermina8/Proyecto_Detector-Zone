//Importación de módulos
const   express = require('express')                                                                                                                        // importo framework Express,para manejar las rutas
const router = express.Router()                                                                                                                                // Creo instancia del Router de Express, para definir rutas en archivos separados y organizarlos de forma modular
const { login } = require('../controllers/loginController');                                                                                                      // Traigo la función test, encargada de manejar peticiones que lleguen a la ruta /test.
const { registro } = require('../controllers/registroController');

//Definición de Rutas
//router.get('/test', test);                                                                                                                                 // cuando se haga una petición GET a http://localhost:3000/test, se ejecuta la función test del pingController.js.
router.post('/login', login);
router.post('/registro', registro);

//Exportación del Router
module.exports = router;                                                                                                                                                // Exporta el router para que pueda ser utilizado en el archivo index.js. - Conecto las rutas al servidor principal.