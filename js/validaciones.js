import {REGEX} from './Regex.js';

export function validarNombreApellido(nomApe){
    const nombreLimpio = nomApe ? nomApe.trim() : '';



    if (!nombreLimpio){
        return {
            value: false,
            error: "El nombre es un campo obligatorio"}
    }

    if(REGEX.nombreApellido.test(nombreLimpio)){
        return {
            value: true,
            error: ""
        };
    }
    else{
        return {
            value: false,
            error: "El nombre no se ajusta al patrón. Solo puede introducir su nombre y uno de sus apellidos"
        };
    }

}

export function validarCorreo(correo){
    const correoLimpio = correo ? correo.trim() : '';
    if (!correoLimpio){
        return {
            value: false,
            error: "El correo es un campo obligatorio"
        };
    }

    if(!correoLimpio.contains('@')){
        return {
            value: false,
            error: "Debe incluir @"
        };
    }

    const partes = correoLimpio.split('@');
    const [local, dominio] = partes;

    if (!dominio.includes('.') || !dominio.split('.').pop().length < 2){
        return {
            value: false,
            error: "El dominio debe tener una extensión válida(.com, .es, .uk, etc.)"
        };
    }

    if(REGEX.password.test(correo)){
        return {
            value: false,
            error: "Formato de Email invalido"
        };
    }

    return {
        value: true,
        error: ""
    };
}

export function validarContrasennia(passwd){
    const passwdLimpia = passwd ? passwd.trim() : '';

    if (!passwdLimpia){
        return {
            value: false,
            error: "La contraseña es obligatoria"
        };
    }

    if (REGEX.password.test(passwdLimpia)){
        return {
            value: true,
            error: ""
        };
    }
    else{
        return {
            value: false,
            error: "La contraseña no cumple los requisitos mínimos. Debe tener mínimo 8 carácteres " +
                "e incluir una letra mayúscula, una minúscula, un número, un carácter especial "
        };
    }
}

export function validarComprobacionPassword(passwd, passwdComprobada){

    if (!passwdComprobada.trim()){
        return{
            value: false,
            error: "El campo no puede quedarse vacio, debe introducir nuevamente su contraseña"
        }
    }

    if (passwdComprobada !== passwd){
        return{
            value: false,
            error: "Las contraseñas no coinciden"
        }
    }

    return{
        value: true,
        error: "Contraseñas coinciden"
    }
}

export function validarFecha(fecha){
    const objFecha = new Date(fecha);
    const fechaActual = new Date();

    return fechaActual < objFecha;
}

