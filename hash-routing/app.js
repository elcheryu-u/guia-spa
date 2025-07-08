// Seleccionamos el elemento principal donde se mostrará el contenido dinámico
const app = document.getElementById('app');

// Definimos un objeto con las rutas disponibles y su contenido HTML asociado
const routes = {
  '/': '<h1>Home</h1><p>Welcome to our SPA!</p>',
  '/about': '<h1>About</h1><p>We build things.</p>',
  '/contact': '<h1>Contact</h1><p>Reach us here.</p>',
};

// Esta función se encarga de actualizar la vista según la ruta en el hash
function router() {
  const hash = window.location.hash || '#/'; // Obtenemos el hash actual o usamos #/ por defecto
  const route = hash.slice(1); // Quitamos el símbolo '#' del hash para obtener la ruta
  app.innerHTML = routes[route] || '<h1>404</h1><p>Page not found</p>'; // Renderizamos la vista o mostramos un 404
}

// Escuchamos el evento 'hashchange' para reaccionar cuando el hash cambia (ej: usuario hace clic en un link)
window.addEventListener('hashchange', router);

// También renderizamos la vista adecuada al cargar la página por primera vez
window.addEventListener('load', router);
