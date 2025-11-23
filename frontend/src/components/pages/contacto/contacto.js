//  src/components/pages/contacto/contacto.js

import { BaseComponent } from "../../../core/BaseComponent.js";

class ContactoPage extends BaseComponent {
  async connectedCallback() {
    await this.loadFiles(import.meta.url, "contacto.html", "contacto.css");
  }
}

customElements.define("contacto-page", ContactoPage);
