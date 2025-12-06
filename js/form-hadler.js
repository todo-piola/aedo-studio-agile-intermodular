import * as v from './validaciones.js';
import * as u from './ui.js';

export function inputNombreApellido(e){
    const valor = e.target.value;

    const objFuncion = v.validarNombreApellido(valor);

    if (!objFuncion.boolean){
        u.mensajesError("errNombre", objFuncion.errMensaje, e);
    }
    else{
        u.limpiarMensajesError("errNombre", objFuncion.errMensaje, e);
    }
}

export function inputCorreo(e){
    const valor = e.target.value;

    const objFuncion = v.validarCorreo(valor);

    if (!objFuncion.boolean){
        u.mensajesError("errCorreo", objFuncion.errMensaje, e);
    }
    else{
        u.limpiarMensajesError("errCorreo", objFuncion.errMensaje, e);
    }
}

export function inputPasswd(e){
    const valor = e.target.value;

    const objFuncion = v.validarContrasennia(valor);

    if (!objFuncion.boolean){
        u.mensajesError("errContrasena", objFuncion.errMensaje, e);
    }
    else{
        u.limpiarMensajesError("errContrasena", objFuncion.errMensaje, e);
    }
}

export function inputConfirmacion(evento){
    const valor = evento.target.value;
    const passwrodOriginal = document.getElementById('contrasena').value.trim();

    const objFuncion = v.validarComprobacionPassword(valor, passwrodOriginal);

    if (!objFuncion.boolean){
        u.mensajesError("errConfirmarContrasena", objFuncion.errMensaje, e);
    }
    else{
        u.limpiarMensajesError("errConfirmarContrasena", objFuncion.errMensaje, e);
    }
}

export function inputFecha(e){
    const valor = e.target.value;

    const objFuncion = v.validarFecha(valor);

    if (!objFuncion.boolean){
        u.mensajesError("errNacimiento", objFuncion.errMensaje);
    }
    else{
        u.limpiarMensajesError("errNacimiento", objFuncion.errMensaje);
    }
}

export function manejarSubmit(event){
    event.preventDefault();
    u.mostrarMensajeExito("Formulario enviado correctamente");
    u.limpiarFormulario();
}