import { obtenerUsuarioLogeado, verificarAcceso, buildSiteUrl } from './autorizar.js';

const inputNombre = document.getElementById("input-nombre");
const inputPassword = document.getElementById("input-password");
const btnRegistrar = document.getElementById("btn-registrar");
const errorUsuario = document.getElementById("error");
const retraso = (ms) => new Promise(resolve => setTimeout(resolve, ms));


const usuario = [
    {nombre: "Edar", contraseña: "951014"},
    {nombre: "Victor", contraseña: "951014"},
    {nombre: "Tony", contraseña: "951014"},
    {nombre: "Maller", contraseña: "951014"},
    {nombre: "Maryori", contraseña: "951014"}
];

btnRegistrar.addEventListener("click", async () => {
    const nombreUsuario = inputNombre.value;
    const contraseñaUsuario = inputPassword.value;

    const usuarioEncontrado = usuario.find((u) => u.nombre === nombreUsuario && u.contraseña === contraseñaUsuario);

    if (usuarioEncontrado) {
        localStorage.setItem("UsuarioLogeado", nombreUsuario);
        errorUsuario.textContent = "Buscando Credenciales...";
        await retraso(1000);
        errorUsuario.textContent = "Credenciales Encontradas";
        window.location.href ="hub.html");
    } else {
        errorUsuario.textContent = "Credenciales Incorrecto";
    };

});
