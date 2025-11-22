class ContactoPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section style="padding: 2rem;">
        <h1>Contacto</h1>
        
        <p>Puedes escribirnos al correo:</p>
        <strong>contacto@restaurante.com</strong>

        <br><br>

        <p>O visítanos en nuestra dirección.</p>
      </section>
    `;
  }
}

customElements.define("contacto-page", ContactoPage);
