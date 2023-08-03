import express from 'express';
import bycscript from 'bcryptjs';
import Usuario from '../models/Usuario.js';



const CrearUsuario = async (req, res) => {
 
   const {nombre,correo,password,roles} = req.body;
   const User= new Usuarioio({nombre,correo,password,roles});
   // validacion de datos

   // validar correo
   const existeCorreo = await Usuario.findOne({correo});
    if (existeCorreo) {
        return res.status(400).json({
            msg: "El correo ya existe"
        });
    }


   //encriptar contraseña
    const salt = bycscript.genSaltSync();
    User.password = bycscript.hashSync(password, salt);

// guardar en la base de datos
    try {
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