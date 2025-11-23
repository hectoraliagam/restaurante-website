//  src/components/pages/home/home.js

import { BaseComponent } from "../../../core/BaseComponent.js";

class HomePage extends BaseComponent {
  async connectedCallback() {
    await this.loadFiles(import.meta.url, "home.html", "home.css");
  }
}

customElements.define("home-page", HomePage);
