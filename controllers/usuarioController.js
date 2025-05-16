import Usuario  from "../models/Usuario.js";


const formularioLogin = (req,res) => {
    res.render('auth/login',{
        pagina:"Iniciar Sesion"
    });
}


const formularioRegistro = (req,res) => {
    res.render('auth/registro',{
        pagina:"Crear Cuenta"
    });
}

const registrar= (req,res) => {

console.log('Registrando----');

}


const formularioOlvidePassword = (req,res) => {
    res.render('auth/olvide-password',{
        pagina:"Recuperar Acceso"
    });
}




export{
    formularioLogin,
    formularioRegistro,
    registrar,
    formularioOlvidePassword,
}