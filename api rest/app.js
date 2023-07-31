/* FORMA INICIAL DE CREAR UN SERVIDOR EN EXPRESS

require('dotenv').config();

const express = require('express');

const app = express();
// Path: app.js

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(process.env.HOST, () => {
    console.log('Server is running ', process.env.HOST);
});
*/

// FORMA DE HACERLO CON CLASES

require("dotenv").config();
const Server = require("./models/server");
const miServidor = new Server();
miServidor.listen();