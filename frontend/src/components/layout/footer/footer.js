//  src/components/layout/footer/footer.js

import { BaseComponent } from "../../../core/BaseComponent.js";

class MainFooter extends BaseComponent {
  async connectedCallback() {
    await this.loadFiles(import.meta.url, "footer.html", "footer.css");

    this.shadowRoot.querySelector("#year").textContent = new Date().getFullYear();
  }
}

customElements.define("main-footer", MainFooter);
