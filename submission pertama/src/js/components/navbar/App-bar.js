import { html } from 'lit';
import LitTanpaShadowDom from '../base/Lit-Tanpa-Shadow-Dom';

class AppBar extends LitTanpaShadowDom {
  static properties = {
    brandName: { type: String, reflect: true },
  };

  constructor() {
    super();
    this._cekKetersediaanProperti();
  }

  _cekKetersediaanProperti() {
    if (!this.hasAttribute('brandName')) {
      throw new Error(`Atribut "brandName" harus diterapkan pada elemen ${this.localName}`);
    }
  }

  render() {
    return html`
      <nav class="navbar navbar-expand-md navbar-dark bg-primary nav-sticky">
        <div class="container">
          <span class="navbar-brand">${this.brandName}</span>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <links-bar class="ms-auto mb-2 mb-md-0">
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);
