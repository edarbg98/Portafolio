import { verificarAcceso, cerrarSesion } from '../login/autorizar.js';
verificarAcceso();

const inputId = document.getElementById("input-id");
const buscar = document.getElementById("btn-buscar");
const cajaBuscar = document.getElementById("caja-buscar");
const retraso = (ms) => new Promise(resolve => setTimeout(resolve, ms));

buscar.addEventListener("click", async () => {
    const id = inputId.value;

    cajaBuscar.textContent = "Buscando jugadores...";

    await retraso(1000);

    const respuesta = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    const caja = await respuesta.json();

    const {name, username, email} = caja;

    cajaBuscar.textContent = `Jugador: ${name} | Nick: ${username} | Email: ${email}`

});