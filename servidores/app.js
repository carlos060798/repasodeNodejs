/* levantamiento de servidor con http      
const http = require('http');
 http.createServer((req, res) => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World\n');
    }
).listen(8080)

console.log("Server  corriendo en ", 8080);
*/

//levantamiento de servidor con express
const express = require('express');
const app = express();
const port = 8080;

//middleware
// servir contenido estatico
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.send('Hello World');
});
// levantamiento de servidor

app.listen(port, () => {
    console.log("Server  corriendo en ", port);
});

