const MongoConexion= require('./db/db-mongo');
// levantar el servidor
const express = require('express')
const app = express()
const port = 3000
/* crear la ruta
* 1. estuctura de las rutas 
app.METHOD(PATH, HANDLER)
app es una instancia de express.
METHOD es un método de solicitud HTTP.
PATH es una vía de acceso en el servidor.
HANDLER es la función que se ejecuta cuando se correlaciona la ruta.

*/
//Responda con Hello World! en la página inicial:
app.get('/', function (req, res) {
  res.send('Hello World!');
});
//Responda a la solicitud POST en la ruta raíz (/), la página de inicio de la aplicación:
app.post('/', function (req, res) {
  res.send('Got a POST request');
});
//Responda a una solicitud PUT en la ruta /user:
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});
// Responda a una solicitud DELETE en la ruta /user:
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});
// ejemplo de midelware
/* middleware=> es una función que se ejecuta antes de que se envíe una respuesta al cliente.
* 1. se puede usar para realizar tareas comunes de aplicación, como el registro de solicitudes, el análisis de datos, etc.
* 2. se compone de una serie de funciones, se ejecutan secuencialmente.
*/
app.get('/example/b', function (req, res, next) {
    console.log('the response will be sent by the next function ...');
    next();
  }, function (req, res) {
    res.send('Hello from B!');
  });

// metodos de respuesta de express

// 1. res.download() => solicita un archivo para descargarlo.
// 2. res.end() => finaliza el proceso de respuesta.
// 3. res.json() => envía una respuesta JSON.
// 4. res.jsonp() => envía una respuesta JSON con soporte JSONP.
// 5. res.redirect() => redirecciona una solicitud.
// 6. res.render() => renderiza una plantilla de vista.
// 7. res.send() => envía una respuesta de varios tipos.
// 8. res.sendFile => envía un archivo como una secuencia de octetos.
// 9. res.sendStatus() => establece el código de estado de la respuesta y envía su representación de cadena como el cuerpo de respuesta.
app.get('/descarga', function (req, res) {
   // res.download('./text.txt'); // descarga el archivo que se referencia en la ruta
  //  res.json("./text.txt"); // envia una respuesta JSON
  //res.jsonp("soy yo una nues en el bosque"); // envia una respuesta JSON con soporte JSONP
   //res.redirect('https://www.google.com'); // redirecciona una solicitud
   // res.render('./index.js'); // renderiza una plantilla de vista
    // res.send('soy yo una nues en el bosque'); // envia una respuesta de varios tipos
   // res.end(); // finaliza el proceso de respuesta
  }
);

// ejemplo de  app.route()

app.route('/book')
  .get(function(req, res) {
    res.send('Get a random book');
  })
  .post(function(req, res) {
    res.send('Add a book');
  })
  .put(function(req, res) {
    res.send('Update the book');
  });

// ejemplo de express.Router

const RouterExample = require('./ejemploExpressRouter.js');
app.use('/example', RouterExample);


// ejemplo de llamado a un middleware

const requestTime = function (req, res, next) {
    req.requestTime = Date.now();
    next();
  };
  
  app.use(requestTime);
  
  app.get('/middleware', function (req, res) {
    var responseText = 'Hello World!';
    responseText += 'Requested at: ' + req.requestTime + '';
    res.send(responseText);
  });

// conexion de mongo
MongoConexion()



// correr el servidor
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})