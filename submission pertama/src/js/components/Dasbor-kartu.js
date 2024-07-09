import { html } from 'lit';
import LitTanpaShadowDom from './base/Lit-Tanpa-Shadow-Dom';

class DasborKartu extends LitTanpaShadowDom {
  static properties = {
    isi: { type: String, reflect: true },
    deskripsi: { type: String, reflect: true },
    kelas: { type: String, reflect: true },
  };

  constructor() {
    super();

    this.isi = '';
    this.deskripsi = '';
    this.kelas = '';
  }

  render() {
    return html`
      <div class="card ${this.kelas}">
        <div class="card-body">
          <h1 class="card-title fs-2">
            ${this.isi}<br />
            <span class="fs-5">${this.deskripsi}</span>
          </h1>
          <p class="card-text"></p>
        </div>
      </div>
    `;
  }
}

customElements.define('dasbor-kartu', DasborKartu);
