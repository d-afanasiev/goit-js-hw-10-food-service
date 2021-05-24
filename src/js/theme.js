const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const STORAGE_THEME = 'theme';
const STORAGE_STATUS = 'chekbox';

const refs = {
  themeSwitch: document.querySelector('#theme-switch-toggle'),
};

document.body.classList.add(localStorage.getItem(STORAGE_THEME));
if (localStorage.getItem(STORAGE_STATUS)) {
  refs.themeSwitch.checked = localStorage.getItem(STORAGE_STATUS);
}

refs.themeSwitch.addEventListener('change', event => {
  if (document.body.classList.contains(Theme.DARK)) {
    // themeLocal[event.target.name] = Theme.LIGHT;
    localStorage.setItem([STORAGE_THEME], Theme.LIGHT);
    localStorage.setItem([STORAGE_STATUS], refs.themeSwitch.checked);
    document.body.classList.remove(`${Theme.DARK}`);
    document.body.classList.add(`${Theme.LIGHT}`);
    return;
  }
  // themeLocal[event.target.name] = Theme.DARK;
  localStorage.setItem([STORAGE_THEME], Theme.DARK);
  localStorage.setItem([STORAGE_STATUS], refs.themeSwitch.checked);
  document.body.classList.add(`${Theme.DARK}`);
  document.body.classList.remove(`${Theme.LIGHT}`);
});
