class MenuPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section style="padding: 2rem;">
        <h1>Menú</h1>
        <p>Pronto añadiremos nuestros deliciosos platos.</p>
      </section>
    `;
  }
}

customElements.define("menu-page", MenuPage);
