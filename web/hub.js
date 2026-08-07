import { verificarAcceso, cerrarSesion, buildSiteUrl } from './login/autorizar.js';
verificarAcceso();

const sesion = document.getElementById("btn-cerrar-sesion");


sesion.addEventListener("click", ()=> {
    cerrarSesion();
    window.location.href = buildSiteUrl("index.html");
});