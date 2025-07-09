const app = document.getElementById('app');

// Carga un archivo HTML de la carpeta /pages y lo inserta en #app
async function loadPage(path) {
    console.log(path)
    let file = path === '/' ? 'home' : path.slice(1); // '/about' -> 'about'

    console.log(file)
    try {
        const res = await fetch(`/pages/${file}.html`);
        console.log(res)
        if (!res.ok) throw new Error('404');
        const html = await res.text();
        app.innerHTML = html;
    } catch {
        app.innerHTML = '<h1>404</h1><p>Page not found</p>';
    }
}

// Maneja el cambio de ruta (enlace clicado)
function navigate(path) {
    history.pushState({}, '', path);
    loadPage(path);
}

// Intercepta los clics en los enlaces con [data-link]
document.addEventListener('click', e => {
    if (e.target.matches('[data-link]')) {
        e.preventDefault();
        navigate(e.target.getAttribute('data-link'));
    }
});

// Soporta navegación con botones del navegador
window.addEventListener('popstate', () => {
    loadPage(location.pathname);
});

// Al cargar la página
window.addEventListener('load', () => {
    loadPage(location.pathname);
});