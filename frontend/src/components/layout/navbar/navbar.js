class NavBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    const base = import.meta.url.replace("navbar.js", "");
    const html = await fetch(base + "navbar.html").then(r => r.text());
    const css = await fetch(base + "navbar.css").then(r => r.text());

    this.shadowRoot.innerHTML = `
      <style>${css}</style>
      ${html}
    `;

    this.shadowRoot.querySelectorAll("[data-link]").forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        window.router.navigate(link.getAttribute("data-link"));
      });
    });

    this.updateActiveRoute();

    window.addEventListener("popstate", () => this.updateActiveRoute());

    const btn = this.shadowRoot.querySelector(".hamburger");
    const menu = this.shadowRoot.querySelector(".links");

    btn.addEventListener("click", () => {
      menu.classList.toggle("open");
    });
  }

  updateActiveRoute() {
    const current = window.location.pathname;

    this.shadowRoot.querySelectorAll("[data-link]").forEach(link => {
      link.classList.toggle("active", link.getAttribute("data-link") === current);
    });
  }
}

customElements.define("nav-bar", NavBar);
