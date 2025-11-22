class MainFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    const currentDir = import.meta.url.replace("footer.js", "");

    const html = await fetch(currentDir + "footer.html").then(r => r.text());
    const css = await fetch(currentDir + "footer.css").then(r => r.text());

    this.shadowRoot.innerHTML = `
      <style>${css}</style>
      ${html}
    `;

    this.shadowRoot.querySelector("#year").textContent = new Date().getFullYear();

    this.shadowRoot.querySelectorAll("[data-link]").forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        window.router.navigate(link.getAttribute("data-link"));
      });
    });
  }
}

customElements.define("main-footer", MainFooter);
