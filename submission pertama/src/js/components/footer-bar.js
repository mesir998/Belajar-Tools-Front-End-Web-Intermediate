import { html } from 'lit';
import LitTanpaShadowDom from './base/Lit-Tanpa-Shadow-Dom';

class FooterBar extends LitTanpaShadowDom {
  render() {
    return html` <p class="text-center text-white mb-0">Farid Akbar Ishaq Maulana</p> `;
  }
}

customElements.define('footer-bar', FooterBar);
