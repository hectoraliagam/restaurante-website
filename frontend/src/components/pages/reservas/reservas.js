//  src/components/pages/reservas/reservas.js

import { BaseComponent } from "../../../core/BaseComponent.js";

class ReservasPage extends BaseComponent {
  async connectedCallback() {
    await this.loadFiles(import.meta.url, "reservas.html", "reservas.css");    

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
