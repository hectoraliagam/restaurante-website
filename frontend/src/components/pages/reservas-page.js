class ReservasPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section style="padding: 2rem;">
        <h1>Reservas</h1>

        <form id="reservaForm" style="display:flex;flex-direction:column; gap:1rem; max-width:400px;">
          <input required placeholder="Nombre completo"/>
          <input type="date" required />
          <input type="time" required />
          <button>Enviar Reserva</button>
        </form>

        <p id="msg"></p>
      </section>
    `;

    const form = this.querySelector("#reservaForm");
    const msg = this.querySelector("#msg");

    form.onsubmit = e => {
      e.preventDefault();
      msg.textContent = "Reserva enviada (simulado)";
    };
  }
}

customElements.define("reservas-page", ReservasPage);
