export function mensajesError(idError, mensaje){
    document.getElementById(idError).textContent = mensaje;
}

export function limpiarMensajesError(idError){
    document.getElementById(idError).textContent = "";
}

export function mostrarMensajeExito(mensaje){
    document.getElementById("exito").textContent = mensaje;
}

export function limpiarFormulario(form){
    form.reset();
}