class ContactoPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    const dir = import.meta.url.replace("contacto.js", "");
    const html = await fetch(dir + "contacto.html").then(r => r.text());
    const css = await fetch(dir + "contacto.css").then(r => r.text());

    this.shadowRoot.innerHTML = `
      <style>${css}</style>
      ${html}
    `;
  }
}

customElements.define("contacto-page", ContactoPage);
