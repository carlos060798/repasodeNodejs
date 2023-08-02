 import   express   from   'express' ;
 import  {
    CrearUsuario, 
 } from   '../controller/UsuarioController.js' ;

 const  router =express.Router ();

 router.post( '/' , CrearUsuario );
 router.get( '/' );

 export  default   router ;