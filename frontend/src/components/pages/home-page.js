class HomePage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section style="padding: 2rem;">
        <h1>Bienvenido a Nuestro Restaurante</h1>
        <p>Disfruta de una experiencia culinaria única con ingredientes frescos y platos preparados al momento.</p>
      </section>
    `;
  }
}

customElements.define("home-page", HomePage);
