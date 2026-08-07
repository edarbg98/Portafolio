export function obtenerUsuarioLogeado() {
    return localStorage.getItem("UsuarioLogeado");
};

export function verificarAcceso() {
    const usuario = obtenerUsuarioLogeado()

    if (!usuario) {
        alert("Acceso Denegado, primero ingrese las credenciales");
        window.location.href = "index.html";
        return false;
    }

    return true;
};

export function cerrarSesion() {
    localStorage.removeItem("UsuarioLogeado");
    window.location.href = buildSiteUrl("index.html");
}
