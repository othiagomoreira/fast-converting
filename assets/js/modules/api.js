// eslint-disable-next-line import/extensions
import { modalOpen, showMusicInfo } from './modal.js';

const input = document.querySelector('#input');
const btnSendUrl = document.querySelector('#btn');

export default function initApi() {
  const headerParameters = {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'youtube-mp36.p.rapidapi.com',
      'x-rapidapi-key': '37175c0573mshd22b074b36d9c88p12694bjsne64fa1ac4bcc',
    },
  };

  async function getApi(idValue) {
    const response = await fetch(`https://youtube-mp36.p.rapidapi.com/dl?id=${idValue}`, headerParameters);
    const data = await response.json();

    const url = input.value;
    const videoFormatted = url.split('watch?v=').join('embed/');

    if (data.msg === 'success') {
      btnSendUrl.className = 'accept';

      setTimeout(() => {
        modalOpen();
        showMusicInfo(data, videoFormatted);
      }, 2000);

      input.value = '';
    } else {
      btnSendUrl.className = 'rejected';
      input.value = '';
    }
  }

  btnSendUrl.addEventListener('click', (e) => {
    e.preventDefault();

    const inputValue = input.value;

    if (inputValue.includes('youtu.be/')) {
      const getIdMobile = inputValue.split('youtu.be/')[1];
      getApi(getIdMobile);
    } else if (inputValue.includes('watch?v')) {
      const getIdDesktop = inputValue.split('=')[1];
      getApi(getIdDesktop);
    } else {
      getApi(inputValue);
    }
  });
}
