//  manejo de errores de expresss


var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.use(bodyParser());
app.use(methodOverride());
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

//En este ejemplo, los logErrors genéricos pueden escribir información de solicitudes y errores en stderr, por ejemplo:


function logErrors(err, req, res, next) {
  console.error(err.stack);
  next(err);
}


// ejemplo de manejador de errores  predeterminado de express

function errorHandler(err, req, res, next) {
    if (res.headersSent) {
      return next(err);
    }
    res.status(500);
    res.render('error', { error: err });
  }