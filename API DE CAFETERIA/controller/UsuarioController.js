import express from 'express';
import Usuario from '../models/usuario.js';


const CrearUsuario = async (req, res) => {
   const body = req.body;
   console.log(body);
    try {
     const User= new Usuario(body);
      console.log(User);
      const UserDB = User.save();
        res.status(200).json({
            msg: "Usuario creado correctamente",
            User
        });
    }catch (err) {
        console.log(err);
        return res.status(500).json({
            msg: "Error al crear el usuario",
            err
        });
    }
}

export{
    CrearUsuario
}