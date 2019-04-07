/* eslint-disable no-param-reassign */
const drop = document.querySelector('.drop-down');
const profileEdit = document.querySelector('.profile-edit--form');
const settings = document.querySelector('.settings');
const dropSettings = document.querySelector('.drop-down--settings');

function once(seconds, callback) {
  let counter = 0;
  const time = window.setInterval(() => {
    // eslint-disable-next-line no-plusplus
    counter++;
    if (counter >= seconds) {
      callback();
      window.clearInterval(time);
    }
  }, 400);
}

function slideDown(elem) {
  elem.style.maxHeight = '1000px';
  elem.style.opacity = '1';
}

function slideUp(elem) {
  elem.style.maxHeight = '0';
  once(1, () => {
    elem.style.opacity = '0';
  });
}

let showContent = false;

function slide() {
  if (!showContent) {
    profileEdit.classList.add('show');
    drop.classList.add('rotate');
    slideDown(profileEdit);

    showContent = true;
  } else {
    profileEdit.classList.remove('show');
    drop.classList.remove('rotate');
    slideUp(profileEdit);

    showContent = false;
  }
}

function slideSettings() {
  if (!showContent) {
    settings.classList.add('show');
    dropSettings.classList.add('rotate');
    slideDown(settings);

    showContent = true;
  } else {
    settings.classList.remove('show');
    dropSettings.classList.remove('rotate');
    slideUp(settings);

    showContent = false;
  }
}

drop.addEventListener('click', slide);
dropSettings.addEventListener('click', slideSettings);
