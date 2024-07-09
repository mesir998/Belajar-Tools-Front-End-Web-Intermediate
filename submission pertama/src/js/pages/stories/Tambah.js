const Tambah = {
  async init() {
    this._initializeListeners();
  },

  _initializeListeners() {
    const addForm = document.querySelector('#addRecordForm');
    addForm.addEventListener(
      'submit',
      (event) => {
        event.preventDefault();
        event.stopPropagation();

        addForm.classList.add('was-validated');
        this._sendFormData();
      },
      false,
    );
  },

  _sendFormData() {
    const Dataform = this._extractFormData();

    if (this._validasiFormData({ ...Dataform })) {
      console.log('Dataform');
      console.log(Dataform);

    }
  },

  _extractFormData() {
    const Masukangambar = document.querySelector('#validationCustomFileInput');
    const Masukandeskripsi = document.querySelector('#validationCustomDescription');

    return {
      photos: Masukangambar.files[0],
      deskripsi: Masukandeskripsi.nilai,
    };
  },

  _validasiFormData(Dataform) {
    const dataFormFiltered = Object.values(Dataform).filter((item) => item === '');

    return dataFormFiltered.length === 0;
  },

  _redirectToDashboard() {
    window.location.href = '/';
  },
};

export default Tambah;
