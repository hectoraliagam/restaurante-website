class MenuPage extends HTMLElement {
  async connectedCallback() {
    const base = import.meta.url.replace("menu.js", "");
    
    const [html, css, json] = await Promise.all([
      fetch(base + "menu.html").then(r => r.text()),
      fetch(base + "menu.css").then(r => r.text()),
      fetch(base + "menu.json").then(r => r.json())
    ]);

    this.innerHTML = `
      <style>${css}</style>
      ${html}
    `;

    const container = this.querySelector("#menu-content");

    json.categories.forEach(category => {
      const section = document.createElement("div");
      section.classList.add("menu-category");

      section.innerHTML = `
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

      container.appendChild(section);
    });
  }
}

customElements.define("menu-page", MenuPage);
