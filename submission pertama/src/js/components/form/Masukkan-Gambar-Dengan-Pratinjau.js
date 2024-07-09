import { html, nothing } from 'lit';
import LitTanpaShadowDom from '../base/Lit-Tanpa-Shadow-Dom';

class MasukkanGambarDenganPratinjau extends LitTanpaShadowDom {
  static properties = {
    masukanId: { type: String, reflect: true },
    gambarDefault: { type: String, reflect: true },
    altGambarDefault: { type: String, reflect: true },

    pesanFeedbackValid: { type: String, reflect: true },
    pesanFeedbackInvalid: { type: String, reflect: true },

    required: { type: Boolean, reflect: true },
  };

  constructor() {
    super();

    this.type = 'text';
    this.gambarDefault = '';
    this.altGambarDefault = '';
  }

  render() {
    return html`
      <div style="width: 100%; height: 20rem" class="mb-3 ${!this.gambarDefault ? 'd-none' : ''}">
        ${this._pratinjauGambarTemplate()}
      </div>
      <input
        type="file"
        class="form-control"
        id=${this.masukanId || nothing}
        accept="image/*"
        ?required=${this.required}
        @change=${this._perbaruiPratinjauFoto}
      />

      ${this._templateUmpanBalik()}
    `;
  }

  _perbaruiPratinjauFoto() {
    const imgChangeElement = document.querySelector('#validationCustomFileInputImgChange');
    const imgInputElement = document.querySelector('#validationCustomFileInput');

    let defaultImgElement = null;
    if (this.gambarDefault) {
      defaultImgElement = document.querySelector('#validationCustomFileInputImg');
    }

    const selectedPhoto = imgInputElement.files[0];
    if (!selectedPhoto) return;

    const imgReader = new FileReader();
    imgReader.onload = (event) => {
      if (this.gambarDefault) {
        defaultImgElement.classList.add('d-none');
      }
      imgChangeElement.parentElement.classList.remove('d-none');
      imgChangeElement.classList.remove('d-none');
      imgChangeElement.style.backgroundImage = `url('${event.target.result}')`;
    };

    imgReader.readAsDataURL(selectedPhoto);
  }

  _templateUmpanBalik() {
    let validFeedbackTemplate = '';
    let invalidFeedbackTemplate = '';
    if (this.pesanFeedbackValid) {
      validFeedbackTemplate = html` <div class="valid-feedback">${this.pesanFeedbackValid}</div> `;
    }
    if (this.pesanFeedbackInvalid) {
      invalidFeedbackTemplate = html`
        <div class="invalid-feedback">${this.pesanFeedbackInvalid}</div>
      `;
    }

    return html`${validFeedbackTemplate}${invalidFeedbackTemplate}`;
  }

  _pratinjauGambarTemplate() {
    const imgChangeTemplate = html`
      <div
        class="w-100 h-100 ${this.gambarDefault ? 'd-none' : ''}"
        style="
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
        "
        id="${this.masukanId || nothing}ImgChange"
      ></div>
    `;
    if (this.gambarDefault) {
      return html`
        <img
          class="img-fluid h-100"
          src="${this.gambarDefault}"
          alt="${this.altGambarDefault}"
          id="${this.masukanId || nothing}Img"
        />
        ${imgChangeTemplate}
      `;
    }

    return html` ${imgChangeTemplate} `;
  }
}

customElements.define('masukan-gambar-dengan-pratinjau', MasukkanGambarDenganPratinjau);
