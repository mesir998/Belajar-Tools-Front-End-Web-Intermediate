import { html } from 'lit';
import LitTanpaShadowDom from '../base/Lit-Tanpa-Shadow-Dom';

class LinksBar extends LitTanpaShadowDom {
  render() {
    return html`
      <ul class="navbar-nav d-flex gap-2 gap-md-3 mt-2 mt-md-0">
        <nav-link isi="Dashboard" tujuan="/"></nav-link>
        <nav-link isi="Tambah Story" tujuan="/stories/tambah.html"></nav-link>
      </ul>
    `;
  }
}

customElements.define('links-bar', LinksBar);
