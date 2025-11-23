// src/core/BaseComponent.js

export class BaseComponent extends HTMLElement {
  constructor() {
    super();
    this.useShadow = true; // opcional
    if (this.useShadow) this.attachShadow({ mode: "open" });
  }

  async loadFiles(componentUrl, htmlFile, cssFile) {
    const base = componentUrl.substring(0, componentUrl.lastIndexOf("/") + 1);

    const [html, css] = await Promise.all([
      fetch(base + htmlFile).then(r => r.text()),
      fetch(base + cssFile).then(r => r.text())
    ]);

    const root = this.useShadow ? this.shadowRoot : this;

    root.innerHTML = `
      <style>${css}</style>
      ${html}
    `;

    this.enableRouting(root);
  }

  enableRouting(root) {
    root.querySelectorAll("[data-link]").forEach(el => {
      el.addEventListener("click", e => {
        e.preventDefault();
        window.router.navigate(el.getAttribute("data-link"));
      });
    });
  }
}
