import { html } from 'lit';
import LitTanpaShadowDom from '../base/Lit-Tanpa-Shadow-Dom';

class LinkBar extends LitTanpaShadowDom {
  static properties = {
    isi: { type: String, reflect: true },
    tujuan: { type: String, reflect: true },
  };

  constructor() {
    super();
    this._cekKetersediaanProperti();
  }

  _cekKetersediaanProperti() {
    if (!this.hasAttribute('tujuan')) {
      throw new Error(`Atribut "tujuan" harus diterapkan pada elemen ${this.localName}`);
    }
  }

  render() {
    return html`
      <li class="nav-item">
        <a class="nav-link" href="${this.tujuan}">${this.isi}</a>
      </li>
    `;
  }
}

customElements.define('nav-link', LinkBar);
