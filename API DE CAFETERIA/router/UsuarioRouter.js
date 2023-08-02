import express from "express";
import { CrearUsuario } from "../controller/UsuarioController.js";
import { check } from "express-validator";
import validaciones from "../middlewares/authData.js";

const router = express.Router();
// si se quiere validar los datos de entrada se agrega como segundo parametro [validaciones] sino pasan no se ejecuta el controlador
router.post(
  "/",
  [  check("nombre", "el nombre es obligatorio").not().isEmpty(),
    check("correo", "correo no valido").isEmail(),
    check("password", "la contraseña debe tener minimo 6 caracteres").isLength({
      min: 6,
    }),
    check("roles", "el rol es obligatorio").isIn(["ADMIN_ROLE", "USER_ROLE"]),
    validaciones
  ],

  CrearUsuario
);

router.get("/");

export default router;
