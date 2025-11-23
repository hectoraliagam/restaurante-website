import { createRouter } from "./router/router.js";

import "./components/layout/navbar/navbar.js";
import "./components/layout/footer/footer.js";
import "./components/app-root.js";

import "./components/pages/home/home.js";
import "./components/pages/menu/menu.js";
import "./components/pages/reservas/reservas.js";
import "./components/pages/contacto/contacto.js";

window.router = createRouter();
window.router.loadComponent();
