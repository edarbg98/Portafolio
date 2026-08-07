import { verificarAcceso, cerrarSesion } from '../login/autorizar.js';
verificarAcceso();


const Curar = document.getElementById("btn-curar");
const Dano = document.getElementById("btn-dano");
const Tema = document.getElementById("btn-tema");
const Vida = document.getElementById("texto-vida");
const pantalla = document.getElementById("pantalla");
const tarjeta = document.getElementById("tarjeta");

let vida = 100;

Curar.addEventListener("click", function()  {
    vida = Math.min(100, vida + 10);
    Vida.textContent = vida;
}
);

Dano.addEventListener("click", function()  {
    vida = Math.max(0, vida - 10);
    Vida.textContent = vida;
});

Tema.addEventListener("click", function () {
    pantalla.classList.toggle("dark-body");
    tarjeta.classList.toggle("dark-card");
});