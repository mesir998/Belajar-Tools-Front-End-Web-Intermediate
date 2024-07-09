import { html } from 'lit';
import LitTanpaShadowDom from './base/Lit-Tanpa-Shadow-Dom';

class DetailModal extends LitTanpaShadowDom {
  static properties = {
    judul: { type: String, reflect: true },
  };

  render() {
    return html`
      <div class="modal-dialog modal-lg modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">${this.judul}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="d-flex justify-content-between align-items-center">
              <h1 id="namaDetailRecord"></h1>
              <p id="tanggalDetailRecord"></p>
            </div>
            <div class="mb-3">
              <img src="" id="imgDetailRecord" class="img-fluid" alt="${this.name}" />
            </div>
            <div>
              <p id="deskripsiDetailRecord"></p>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('detail-modal', DetailModal);
