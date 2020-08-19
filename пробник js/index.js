import "../pages/index.css";

import {FormValidator} from './FormValidator.js';
import {NewsApi} from './NewsApi.js';
import {NewsCard} from './NewsCard.js';
import {NewsCardList} from './NewsCardList.js';


/* Переменые */
const form = document.querySelector('#form');
const input = document.querySelector('.search__input');
form.action="URL"
const apiUrl = NODE_ENV === 'production' ? 'https://nomoreparties.co'
 : 'http://nomoreparties.co';
const apiData = {
  url: apiUrl,
  headrs: {
    authorization: '98e7867499484a62bca354bff96d9646',
    'Content-Type': 'application/json'
  }
}

const resultsList = document.querySelector('.results__list');

/* Колбек функции */
const infoNewsCards = () => newsApi.getNewsCards();
const createNewsCard = (data) =>  new NewsCard(data).create();



/* Вызов классов */
const formValidator = new FormValidator(form);
const newsApi = new NewsApi(apiData);
const newsCardList = new NewsCardList(resultsList, createNewsCard, infoNewsCards);
/* ВЫзов функций */
formValidator.setEventListeners();




/* Слушетели событий */
document.querySelector('.search__button').addEventListener('click', function () {
  event.preventDefault();
  localStorage.setItem('keyWord', input.value);

  newsApi.getNewsCards()
.then((res) => {
  return Object.values(res.articles);
})
.then((arrayNews) => {
  localStorage.setItem('news', JSON.stringify(arrayNews)); // получаем данные
  document.querySelector('.results__list').textContent = ''
  newsCardList.render();
})
.catch((err) => {
    console.log(`Ошибка: ${err}`);
});




});


 //localStorage.clear();
// localStorage.setItem('keyWord', input.value); - получаем
// localStorage.getItem('keyWord') - возрощаем
