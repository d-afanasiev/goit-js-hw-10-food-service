import cardTemplate from '../partials/template.hbs';
import menu from '../js/menu.json';

const refs = {
  menuList: document.querySelector('.js-menu'),
};

function insertCardToList() {
  refs.menuList.innerHTML = cardTemplate(menu);
}

insertCardToList();
