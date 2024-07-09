import { html, nothing } from 'lit';
import LitTanpaShadowDom from '../base/Lit-Tanpa-Shadow-Dom';

class TextareaDenganValidasi extends LitTanpaShadowDom {
  static properties = {
    nilai: { type: String, reflect: true },
    baris: { type: Number, reflect: true },
    masukanId: { type: String, reflect: true },

    pesanFeedbackValid: { type: String, reflect: true },
    pesanFeedbackInvalid: { type: String, reflect: true },

    required: { type: Boolean, reflect: true },
  };

  constructor() {
    super();
    this._cekKetersediaanProperti();

    this.baris = 5;
    this.required = false;
  }

  _cekKetersediaanProperti() {
    if (!this.hasAttribute('pesanFeedbackInvalid')) {
      throw new Error(
        `Atribut "pesanFeedbackInvalid" harus diterapkan pada elemen ${this.localName}`,
      );
    }
  }

  render() {
    return html`
      <textarea
        id=${this.masukanId || nothing}
        class="form-control"
        baris=${this.baris || nothing}
        nilai=${this.nilai || nothing}
        ?required=${this.required}
        @input=${(e) => (this.nilai = e.target.nilai)}
        style="resize:none"
      ></textarea>

      ${this._templateUmpanBalikValid()}
      <div class="invalid-feedback">${this.pesanFeedbackInvalid}</div>
    `;
  }

  _templateUmpanBalikValid() {
    if (this.pesanFeedbackValid) {
      return html` <div class="valid-feedback">${this.pesanFeedbackValid}</div> `;
    }

    return html``;
  }
}

customElements.define('textarea-dengan-validasi', TextareaDenganValidasi);
