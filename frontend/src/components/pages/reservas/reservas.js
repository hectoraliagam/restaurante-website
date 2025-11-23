class ReservasPage extends HTMLElement {
  async connectedCallback() {
    const base = import.meta.url.replace("reservas.js", "");

    const [html, css] = await Promise.all([
      fetch(base + "reservas.html").then(r => r.text()),
      fetch(base + "reservas.css").then(r => r.text())
    ]);

    this.innerHTML = `
      <style>${css}</style>
      ${html}
    `;

    const form = this.querySelector("#reservaForm");
    const msg = this.querySelector("#msg");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const data = Object.fromEntries(new FormData(form).entries());

      // Próxima conexión de API en Python
      msg.textContent = `Reserva enviada: ${data.nombre} para ${data.personas} persona(s) el ${data.fecha} a las ${data.hora}.`;

      form.reset();
    });
  }
}

customElements.define("reservas-page", ReservasPage);
