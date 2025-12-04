import * as fh from './form-hadler.js'

document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('formularioLogin');

    const nombreApe = document.getElementById('nombreApe');
    const email = document.getElementById('correo');
    const password = document.getElementById('contrasennia');
    const doubleCheck = document.getElementById('comCorreo');
    const fechaN = document.getElementById('fechaNacimiento');

    nombreApe.addEventListener('input', fh.inputNombreApellido);
    email.addEventListener('input', fh.inputCorreo);
    password.addEventListener('input', fh.inputPasswd);
    doubleCheck.addEventListener('input', (e) =>
        fh.inputConfirmacion (e, password.value));
    fechaN.addEventListener('input', fh.inputFecha);

    form.addEventListener('submit', fh.manejarSubmit);
})