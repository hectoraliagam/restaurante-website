//  src/components/layout/navbar/navbar.js

import { BaseComponent } from "../../../core/BaseComponent.js";

class NavBar extends BaseComponent {
  async connectedCallback() {
    await this.loadFiles(import.meta.url, "navbar.html", "navbar.css");
    console.log("URL base:", import.meta.url);

    const btn = this.shadowRoot.querySelector(".hamburger");
    const menu = this.shadowRoot.querySelector(".links");

    btn.addEventListener("click", () => {
      menu.classList.toggle("open");
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
