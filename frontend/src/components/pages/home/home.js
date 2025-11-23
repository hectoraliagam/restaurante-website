class HomePage extends HTMLElement {
  async connectedCallback() {
    const base = import.meta.url.replace("home.js", "");
    const html = await fetch(base + "home.html").then(r => r.text());
    const css = await fetch(base + "home.css").then(r => r.text());

    this.innerHTML = `
      <style>${css}</style>
      ${html}
    `;

    this.querySelectorAll("[data-link]").forEach(btn => {
      btn.addEventListener("click", e => {
        e.preventDefault();
        window.router.navigate(btn.getAttribute("data-link"));
      });
    });
  }
}

customElements.define("home-page", HomePage);
