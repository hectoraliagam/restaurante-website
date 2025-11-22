export function createRouter() {
  const routes = {
    "/": "home-page",
    "/menu": "menu-page",
    "/reservas": "reservas-page",
    "/contacto": "contacto-page"
  };

  function loadComponent(path = location.pathname) {
    const tag = routes[path] || "home-page";
    const app = document.querySelector("app-root");
    app.innerHTML = `<${tag}></${tag}>`;
  }

  function navigate(path) {
    history.pushState({}, "", path);
    loadComponent(path);
  }

  window.onpopstate = () => loadComponent();

  return { loadComponent, navigate };
}
