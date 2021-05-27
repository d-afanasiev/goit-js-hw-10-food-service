import cardTemplate from '../partials/template.hbs';
import menu from '../js/menu.json';

const refs = {
  menuList: document.querySelector('.js-menu'),
};

refs.menuList.innerHTML = cardTemplate(menu);
