const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World\n')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

/*
Cada vez que se recibe una nueva solicitud, se llama al requesteventohttp.IncomingMessage ,
 proporcionando dos objetos: una solicitud (un objeto) y una respuesta (un http.ServerResponseobjeto)
*/
