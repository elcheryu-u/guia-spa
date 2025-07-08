# 🧠 Tutoriales SPA con JavaScript vanilla

Este repositorio contiene dos implementaciones distintas de una SPA (Single Page Application) utilizando JavaScript puro (Vanilla JS), sin frameworks.

---

## Estructura

```
tutoriales-spa/
├── hash-routing/ # SPA usando window.location.hash
│ ├── index.html
│ └── app.js
├── history-api/ # SPA usando History API (pushState)
│ ├── index.html
│ └── app.js
├── package.json
└── README.md
```

---

## ⚙️ Requisitos

- Node.js (versión 18 o superior recomendado)
- npm

---

## 🚀 Instalación

1. Clona el repositorio

```bash
git clone https://github.com/elcheryu-u/guia-spa.git
cd guia-spa
```

2. Instala las dependencias:

```bash
npm install
```

---

## ▶️ Iniciar cada implementación

### - Hash Routing

Usa `window.location.hash` para el enrutamiento (`#/ruta`).

```bash
npm run start:hash
```

### - History API

Usa `history.pushState()` y `popstate` para URLs limpias (`/ruta`).

```bash
npm run start:history
```

Abre el navegador en `http://localhost:5173`

<img src="./assets/images/localhost-vite.png" />

_**📌 Importante:** Para que el SPA con History API funcione correctamente al recargar o acceder directamente a rutas, el servidor debe devolver siempre index.html. Vite ya lo maneja por defecto en desarrollo._