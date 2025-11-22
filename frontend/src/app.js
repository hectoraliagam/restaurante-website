import { createRouter } from "./router/router.js";

import "./components/layout/navbar/navbar.js";
import "./components/layout/footer/footer.js";
import "./components/app-root.js";

import "./components/pages/home-page.js";
import "./components/pages/menu-page.js";
import "./components/pages/reservas-page.js";
import "./components/pages/contacto-page.js";

window.router = createRouter();
window.router.loadComponent();
