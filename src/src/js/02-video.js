import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// Selectați iframe-ul
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

// Cheia pentru local storage
const STORAGE_KEY = 'videoplayer-current-time';

// Funcție pentru actualizarea timpului de redare în local storage
const saveCurrentTime = throttle((data) => {
  localStorage.setItem(STORAGE_KEY, data.seconds);
}, 1000);

// Ascultați evenimentul de `timeupdate` pentru a actualiza timpul curent
player.on('timeupdate', saveCurrentTime);

// La reîncărcarea paginii, setați timpul curent dacă există în local storage
const savedTime = localStorage.getItem(STORAGE_KEY);
if (savedTime) {
  player.setCurrentTime(parseFloat(savedTime)).catch((error) => {
    console.error('Error setting time:', error.name);
  });
}

