import express from 'express';
import bycscript from 'bcryptjs';
import Usuario from '../models/Usuario.js';



const CrearUsuario = async (req, res) => {
 
   const {nombre,correo,password,rol} = req.body;
   const User= new Usuario({nombre,correo,password,rol});
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


const ModificarUsuario = async (req, res) => {
    const { id } = req.params;
    const { password, ...resto } = req.body;

    // Validar contra base de datos
    if (password) {
        const salt = bycscript.genSaltSync();
        resto.password = bycscript.hashSync(password, salt);
    }

    try {
        const updatedUser = await Usuario.findByIdAndUpdate(id, resto, { new: true });

        if (!updatedUser) {
            return res.status(404).json({
                msg: "Usuario no encontrado"
            });
        }

        res.status(200).json({
            msg: "Usuario modificado correctamente",
            updatedUser
        });
    } catch (error) {
        res.status(500).json({
            msg: "Error al modificar el usuario",
            error
        });
    }
}


export{
    CrearUsuario,
    ModificarUsuario
}