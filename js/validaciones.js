import {REGEX} from './Regex.js';

export function validarNombreApellido(nomApe){
    const nombreLimpio = nomApe ? nomApe.trim() : '';



    if (!nombreLimpio){
        return {
            boolean: false,
            errMensaje: "El nombre es un campo obligatorio"}
    }

    if(REGEX.nombreApellido.test(nombreLimpio)){
        return {
            value: true,
            errMensaje: ""
        };
    }
    else{
        return {
            boolean: false,
            errMensaje: "El nombre no se ajusta al patrón. Solo puede introducir su nombre y uno de sus apellidos"
        };
    }

}

export function validarCorreo(correo){
    const correoLimpio = correo ? correo.trim() : '';
    if (!correoLimpio){
        return {
            boolean: false,
            errMensaje: "El correo es un campo obligatorio"
        };
    }

    if(!correoLimpio.contains('@')){
        return {
            boolean: false,
            errMensaje: "Debe incluir @"
        };
    }

    const partes = correoLimpio.split('@');
    const [local, dominio] = partes;

    if (!dominio.includes('.') || !dominio.split('.').pop().length < 2){
        return {
            boolean: false,
            errMensaje: "El dominio debe tener una extensión válida(.com, .es, .uk, etc.)"
        };
    }

    if(REGEX.password.test(correo)){
        return {
            boolean: false,
            errMensaje: "Formato de Email invalido"
        };
    }

    return {
        boolean: true,
        errMensaje: ""
    };
}

export function validarContrasennia(passwd){
    const passwdLimpia = passwd ? passwd.trim() : '';

    if (!passwdLimpia){
        return {
            boolean: false,
            errMensaje: "La contraseña es obligatoria"
        };
    }

    if (REGEX.password.test(passwdLimpia)){
        return {
            boolean: true,
            errMensaje: ""
        };
    }
    else{
        return {
            boolean: false,
            errMensaje: "La contraseña no cumple los requisitos mínimos. Debe tener mínimo 8 carácteres " +
                "e incluir una letra mayúscula, una minúscula, un número, un carácter especial "
        };
    }
}

export function validarComprobacionPassword(passwd, passwdComprobada){

    if (!passwdComprobada.trim()){
        return{
            boolean: false,
            errMensaje: "El campo no puede quedarse vacio, debe introducir nuevamente su contraseña"
        }
    }

    if (passwdComprobada !== passwd){
        return{
            boolean: false,
            errMensaje: "Las contraseñas no coinciden"
        }
    }

    return{
        boolean: true,
        errMensaje: "Contraseñas coinciden"
    }
}

export function validarFecha(fecha){
    const objFecha = new Date(fecha);
    const fechaActual = new Date();

    if (fechaActual < objFecha){
        return{
            boolean: false,
            errMensaje: "Las contraseñas no coinciden"
        }
    }

    return{
        boolean: true,
        errMensaje: "Contraseñas coinciden"
    }
}

