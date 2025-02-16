//Importación de módulos
const express = require('express');                                                                                                                                                  //Creo la importación del framework Express,
const app = express();                                                                                                                                                     //instancia de la aplicación Express
const port = 3000;                                                                                                                                                       //Defino el puerto que escuchará el servidor back
const crossOriginIsolated = require('cors');                                                                                                                     //Para permitir solicitudes desde el frontend en React. de diferentes orígenes

// Configuración de Rutas
const routes = require('./api/endpoints');                                                                                                                               //Importo rutas definidas en endpoints.js

app.use(express.json());                                                                                                                                                     //Para permitir trabajar con JSON en las solicitudes
app.use(crossOriginIsolated());                                                                                                                                              // Habilito el CORS
app.use('/', routes);                                                                                                                                                          //indico que use esas rutas, las gestiono desde endpoints.js

//Inicio el Servidor
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
