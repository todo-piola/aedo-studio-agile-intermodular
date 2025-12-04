import * as v from './validaciones.js';
import * as u from './ui.js';

export function inputNombreApellido(e){
    const id = e.target.id;
    const valor = e.target.value;

    const objFuncion = v.validarNombreApellido(valor);

    if (!objFuncion.boolean){
        u.mensajesError(id, objFuncion.errMensaje);
    }
    else{
        u.limpiarMensajesError(id, objFuncion.errMensaje);
    }
}

export function inputCorreo(e){
    const id = e.target.id;
    const valor = e.target.value;

    const objFuncion = v.validarCorreo(valor);

    if (!objFuncion.boolean){
        u.mensajesError(id, objFuncion.errMensaje);
    }
    else{
        u.limpiarMensajesError(id, objFuncion.errMensaje);
    }
}

export function inputPasswd(e){
    const id = e.target.id;
    const valor = e.target.value;

    const objFuncion = v.validarContrasennia(valor);

    if (!objFuncion.boolean){
        u.mensajesError(id, objFuncion.errMensaje);
    }
    else{
        u.limpiarMensajesError(id, objFuncion.errMensaje);
    }
}

export function inputConfirmacion(evento, password){
    const id = evento.target.id;
    const valor = evento.target.value;

    const objFuncion = v.validarComprobacionPassword(valor, password);

    if (!objFuncion.boolean){
        u.mensajesError(id, objFuncion.errMensaje);
    }
    else{
        u.limpiarMensajesError(id, objFuncion.errMensaje);
    }
}

export function inputFecha(e){
    const id = e.target.id;
    const valor = e.target.value;

    const objFuncion = v.validarFecha(valor);

    if (!objFuncion.boolean){
        u.mensajesError(id, objFuncion.errMensaje);
    }
    else{
        u.limpiarMensajesError(id, objFuncion.errMensaje);
    }
}

export function manejarSubmit(event){
    event.preventDefault();
    u.mostrarMensajeExito("Formulario enviado correctamente");
    u.limpiarFormulario();
}