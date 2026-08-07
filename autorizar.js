export function obtenerUsuarioLogeado() {
    return localStorage.getItem("UsuarioLogeado");
};

export function buildSiteUrl(relativePath) {
    const pathname = window.location.pathname.replace(/\/+$/, "");
    const segments = pathname.split("/").filter(Boolean);
    const webIndex = segments.indexOf("web");
    const basePrefix = webIndex !== -1 && webIndex < segments.length - 1
        ? `/${segments.slice(0, webIndex + 1).join("/")}/`
        : "/";

    return `${basePrefix}${relativePath.replace(/^\/+/, "")}`;
}

export function verificarAcceso() {
    const usuario = obtenerUsuarioLogeado()

    if (!usuario) {
        alert("Acceso Denegado, primero ingrese las credenciales");
        window.location.href = buildSiteUrl("index.html");
        return false;
    }

    return true;
};

export function cerrarSesion() {
    localStorage.removeItem("UsuarioLogeado");
    window.location.href = buildSiteUrl("index.html");
}