//  src/components/pages/menu/menu.js

import { BaseComponent } from "../../../core/BaseComponent.js";

class MenuPage extends BaseComponent {
  async connectedCallback() {
    await this.loadFiles(import.meta.url, "menu.html", "menu.css");

    const base = import.meta.url.replace("menu.js", "");
    const data = await fetch(base + "menu.json").then(r => r.json());

    const container = this.querySelector("#menu-content");

    data.categories.forEach(category => {
      const div = document.createElement("div");
      div.className = "menu-category";

      div.innerHTML = `
        <h2>${category.name}</h2>
        <div class="grid">
          ${category.items.map(item => `
            <div class="dish">
              <img src="${item.image}" alt="${item.name}">
              <h3>${item.name}</h3>
              <p>${item.description}</p>
              <span class="price">$${item.price}</span>
            </div>
          `).join("")}
        </div>
      `;

      container.appendChild(div);
    });
  }
}

customElements.define("menu-page", MenuPage);
