export function mensajesError(idError, mensaje){
    document.getElementById(idError).textContent = mensaje;
    evento.target.classList.add('incorrecto');
}

export function limpiarMensajesError(idError, evento){
    document.getElementById(idError).textContent = "";
    evento.target.classList.add('valido');
}

export function mostrarMensajeExito(mensaje){
    document.getElementById("mensajeExito").textContent = mensaje;

}

export function limpiarFormulario(form){
    form.reset();
}
