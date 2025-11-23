//  src/components/layout/navbar/navbar.js

import { BaseComponent } from "../../../core/BaseComponent.js";

class NavBar extends BaseComponent {
  async connectedCallback() {
    await this.loadFiles(import.meta.url, "navbar.html", "navbar.css");

    const btn = this.shadowRoot.querySelector(".hamburger");
    const menu = this.shadowRoot.querySelector(".links");

    btn.addEventListener("click", () => {
      menu.classList.toggle("open");
      btn.classList.toggle("active");
    });

    this.shadowRoot.querySelectorAll("[data-link]").forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("open");
        btn.classList.remove("active");
      });
    });

    this.updateActiveRoute();
    window.addEventListener("popstate", () => this.updateActiveRoute());
  }

  updateActiveRoute() {
    const current = window.location.pathname;

    this.shadowRoot.querySelectorAll("[data-link]").forEach(link => {
      link.classList.toggle("active", link.getAttribute("data-link") === current);
    });
  }
}

customElements.define("nav-bar", NavBar);
