// creacion de servidores con clases en node js

const express = require("express");
const cors = require("cors");
const router = require("../route/user");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.Host;
    this.usuariosPath = "/api/usuarios";
    this.middlewares();
    this.routes();
  }
  routes() {
    this.app.use("/api/usuarios", router);
  }
    middlewares() {
        // cors
    this.app.use(cors());
    }
  listen() {
    this.app.listen(this.port, () => {
      console.log(this.port);
    });
  }
}

module.exports = Server;
