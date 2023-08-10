/*  se puede usar para 
Las funciones de middleware pueden realizar las siguientes tareas:

*Ejecutar cualquier código.
*Realizar cambios en la solicitud y los objetos de respuesta.
*Finalizar el ciclo de solicitud/respuestas.
*Invocar el siguiente middleware en la pila.
*/

/* estructura de un middleware
*  res=> objeto de respuesta 
*  req=> objeto de solicitud
*  next=> función de devolución de llamada a la que se pasa el control para invocar el siguiente middleware
*/

const myLogger = function (req, res, next) {
    console.log('LOGGED');
    next();
  };


  var app = express();


// tipos de middleware

/*1. middleware de nivel de aplicación
Enlace el middleware de nivel de aplicación a una instancia del objeto de aplicación utilizando las funciones app.use() y app.METHOD(),
*/
app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
  });

// 3. middleware de manejo de errores

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// 4. middleware incorporado
 //consultar documentación de express

// 5. middleware de terceros