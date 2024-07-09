import { html } from 'lit';
import LitTanpaShadowDom from './base/Lit-Tanpa-Shadow-Dom';

class LinkTombol extends LitTanpaShadowDom {
  static properties = {
    tujuan: { type: String, reflect: true },
    isi: { type: String, reflect: true },
    ikon: { type: String, reflect: true },
    kelas: { type: String, reflect: true },
  };

  constructor() {
    super();
    this._cekKetersediaanProperti();

    this.kelas = '';
  }

  _cekKetersediaanProperti() {
    if (!this.hasAttribute('tujuan')) {
      throw new Error(`Atribut "tujuan" harus diterapkan pada elemen ${this.localName}`);
    }

    if (!this.hasAttribute('isi')) {
      throw new Error(`Atribut "isi" harus diterapkan pada elemen ${this.localName}`);
    }
  }

  render() {
    return html`
      <a class="btn ${this.kelas}" href=${this.tujuan}> ${this._templateIkon()}${this.isi} </a>
    `;
  }

  _templateIkon() {
    if (this.ikon) {
      return html`<i class="bi ${this.ikon} me-1"></i>`;
    }

    return html``;
  }
}

customElements.define('link-tombol', LinkTombol);
