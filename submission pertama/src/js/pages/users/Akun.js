const Akun = {
  async init() {
    await this._initializeData();
  },

  async _initializeData() {
    const penggunaId = this._getPenggunaId();

    if (!penggunaId) {
      alert('Data dengan nama yang dicari tidak ditemukan');
      return;
    }

    const ambilCatatan = await fetch('/data/DATA.json');
    const responRecords = await ambilCatatan.json();
    const penggunaAkun = responRecords.listStory;

    const userData = penggunaAkun.find((item) => item.name.replace(/\s/g, '') === penggunaId);

    this._populateUserData(userData);
  },

  _getPenggunaId() {
    const cariParamDetail = new URLSearchParams(window.location.search);
    return cariParamDetail.has('name') ? cariParamDetail.get('name') : null;
  },

  _populateUserData(penggunaAkun = null) {
    if (!(typeof penggunaAkun === 'object')) {
      throw new Error(`Parameter penggunaAkun should be an object. The value is ${penggunaAkun}`);
    }

    const userImage = document.querySelector('#userImage');
    const userNameElement = document.querySelector('#userNameElement');

    userImage.setAttribute('src', '/img/logo-profile.png');
    userImage.setAttribute('alt', penggunaAkun.name);
    userNameElement.textContent = penggunaAkun.name || 'Username Empty';
  },

  _templateEmptyProfile() {
    return `
      <p>Profil Pengguna Tidak Ditemukan</p>
    `;
  },
};

export default Akun;
