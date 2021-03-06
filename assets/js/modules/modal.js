const modalContainer = document.querySelector('#modal-container');
const bntCloseModal = modalContainer.querySelector('#closeModal');
const btnSend = document.querySelector('#btn');
const btnDownload = modalContainer.querySelector('.btn-download');

const nameMusic = modalContainer.querySelector('.name-music');
const video = modalContainer.querySelector('#video');

function closeModal() {
  bntCloseModal.addEventListener('click', () => {
    modalContainer.style.display = 'none';
    btnSend.classList.remove('accept');
  });

  modalContainer.addEventListener('click', (e) => {
    if (e.target === modalContainer) {
      modalContainer.style.display = 'none';
      btnSend.classList.remove('accept');
    }
  });
}

export function modalOpen() {
  modalContainer.style.display = 'flex';
  closeModal();
}

export function showMusicInfo(data, videoFormatted) {
  nameMusic.innerText = data.title;
  video.setAttribute('src', videoFormatted);
  btnDownload.setAttribute('href', data.link);
}
