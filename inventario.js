import { verificarAcceso, cerrarSesion } from './autorizar.js';
verificarAcceso();

const input = document.getElementById("input-item");
const agregar = document.getElementById("btn-agregar");
const inventario = document.getElementById("lista-inventario");

// agregar los ite
agregar.addEventListener("click", () => {
    const item = input.value;
    if (item.trim() === "") return;

    const li = document.createElement("li");
    li.textContent = item;
    
    const borrar = document.createElement("button");
    borrar.textContent = "X"
    borrar.className = "btn-borrar";
    
    //agregar l boton de eliminar
    
    //borrar los item
    borrar.addEventListener("click", () => {
        li.remove();
    });
    
    //dentro de ul
    
    li.appendChild(borrar);
    inventario.appendChild(li);
    
    input.value = "";
})
