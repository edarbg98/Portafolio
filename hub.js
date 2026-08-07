import { verificarAcceso, cerrarSesion } from './autorizar.js';
verificarAcceso();

const sesion = document.getElementById("btn-cerrar-sesion");


sesion.addEventListener("click", ()=> {
    cerrarSesion();
    window.location.href ="index.html";
});
