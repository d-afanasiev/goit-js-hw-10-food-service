import cardTemplate from '../partials/template.hbs';
import menu from '../js/menu.json';

const refs = {
  menuList: document.querySelector('.js-menu'),
};

// function addCards(cards) {
//   return cards.map(cardTemplate).join('');
// }

refs.menuList.innerHTML = cardTemplate(menu);

// console.log(addCards(menu));

// refs.menuList.innerHTML = addCards(menu);
