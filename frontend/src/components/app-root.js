class AppRoot extends HTMLElement {
  connectedCallback() {
    this.style.display = "block";
    this.style.minHeight = "60vh";
  }
}

customElements.define("app-root", AppRoot);
