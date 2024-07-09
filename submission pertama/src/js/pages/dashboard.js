import TanggalFormat from '../tanggalFormat.js'

const Dashboard = {
  async init() {
    await this._initializeData();
    this._initializeListeners();
  },

  async _initializeData() {
    const ambilCatatan = await fetch('/data/DATA.json');
    const responRecords = await ambilCatatan.json();
    this._cariDaftarPengguna = responRecords.listStory;
    this._populateStoriesDataToCard(this._cariDaftarPengguna);
  },

  _initializeListeners() {
    const recordDetailModal = document.getElementById('recordDetailModal');
    recordDetailModal.addEventListener('show.bs.modal', (event) => {
      const modalTitle = recordDetailModal.querySelector('.modal-title');
      modalTitle.focus();

      const button = event.relatedTarget;
      const userData = this._cariDaftarPengguna.find((item) => {
        return item.id == button.dataset.recordId;
      });

      this._populateDetailStoryToModal(userData);
    });
  },

  _populateStoriesDataToCard(listStory = null) {
    if (!(typeof listStory === 'object')) {
      throw new Error(
        `Parameter listStory should be an object. The value is ${listStory}`,
      );
    }

    if (!Array.isArray(listStory)) {
      throw new Error(
        `Parameter listStory should be an array. The value is ${listStory}`,
      );
    }

    const recordCard = document.querySelector('#recordsCard');

    recordCard.innerHTML = '';
    if (listStory.length <= 0) {
      recordCard.innerHTML = this._TemplateemptyCard();
      return;
    }

    listStory.forEach((item, idx) => {
      recordCard.innerHTML += this._templateCard(idx, listStory[idx]);
    });
  },

  _populateDetailStoryToModal(storyRecord) {
    if (!(typeof storyRecord === 'object')) {
      throw new Error(
        `Parameter storyRecord should be an object. The value is ${storyRecord}`,
      );
    }

    const imgDetailRecord = document.querySelector('#recordDetailModal #imgDetailRecord');
    const namaDetailRecord = document.querySelector('#recordDetailModal #namaDetailRecord');
    const tanggalDetailRecord = document.querySelector('#recordDetailModal #tanggalDetailRecord');
    const deskripsiDetailRecord = document.querySelector('#recordDetailModal #deskripsiDetailRecord');

    imgDetailRecord.setAttribute('src', storyRecord.photoUrl);
    imgDetailRecord.setAttribute('alt', storyRecord.name);
    namaDetailRecord.textContent = storyRecord.name;
    tanggalDetailRecord.textContent = TanggalFormat(storyRecord.createdAt);
    deskripsiDetailRecord.textContent = storyRecord.description || '-';
  },

  _templateCard(index, storyRecord, photo_url = "") {
    if (storyRecord.photoUrl == null) {
      photo_url = 'https://dummyimage.com/500x750/cccccc/000000&text=No+Poster'
    } else {
      photo_url = storyRecord.photoUrl
    }
    return `
      <div class="col-12 col-md-6 mt-3">
        <div class="card">
          <div class="card__header m-2">
            <a class="" href="/users/pengguna.html?name=${storyRecord.name.replace(/\s/g, '')}">
              <h1 class="card__header-title">${storyRecord.name}</h4>
            </a>
          </div>
          <a href="#"
            data-bs-toggle="modal" data-bs-target="#recordDetailModal" 
            data-record-id="${storyRecord.id}">
            <div class="card__body">
              <img class="card__body-image w-100 h-50" src="${photo_url}" alt="${storyRecord.name}-images">
              <p class="card__body-description m-2 text-start">${storyRecord.description.slice(0, 100)} ...</p>
              <p class="card__body-date m-2">${TanggalFormat(storyRecord.createdAt)}</p>
            </div>
          </a>
        </div>
      </div>
    `;
  },

  _TemplateemptyCard() {
    return `
      <div class="card__header">
        <p>Tidak ada story</p>
      </div>
    `;
  },
};

export default Dashboard;
