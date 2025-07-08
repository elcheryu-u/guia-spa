// Seleccionamos el elemento principal donde se mostrará el contenido de cada ruta
const app = document.getElementById('app');

// Definimos las rutas y el contenido HTML que se mostrará para cada una
const routes = {
  '/': '<h1>Home</h1><p>Welcome to our SPA!</p>',
  '/about': '<h1>About</h1><p>We build things.</p>',
  '/contact': '<h1>Contact</h1><p>Reach us here.</p>',
};

// Función que cambia la URL sin recargar la página y luego renderiza el contenido
function navigate(path) {
  history.pushState({}, '', path); // Cambia la URL usando la History API
  render(path); // Muestra el contenido correspondiente a la nueva ruta
}

// Función que muestra el contenido de la ruta actual en el DOM
function render(path) {
  // Si la ruta existe en "routes", muestra el contenido. Si no, muestra un 404.
  app.innerHTML = routes[path] || '<h1>404</h1><p>Page not found</p>';
}

// Interceptamos clics en enlaces con data-link para evitar recargar la página
document.addEventListener('click', e => {
  if (e.target.matches('[data-link]')) {
    e.preventDefault(); // Evita que el navegador haga un reload
    navigate(e.target.getAttribute('href')); // Navega a la ruta especificada
  }
});

// Cuando el usuario usa los botones "atrás" o "adelante" del navegador
window.addEventListener('popstate', () => {
  render(window.location.pathname); // Renderiza la vista correspondiente a la ruta actual
});

// Al cargar la página por primera vez, renderiza la vista correcta según la URL
window.addEventListener('load', () => {
  render(window.location.pathname);
});
