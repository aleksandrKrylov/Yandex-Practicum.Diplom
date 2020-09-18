import "../pages/index.css";

import { NUMBER_NEWS_CARDS, API_URL } from "./constants/constants.js";
import { SearchInput } from "./components/SearchInput.js";
import { NewsApi } from "./modules/NewsApi.js";
import { NewsCard } from "./components/NewsCard.js";
import { NewsCardList } from "./components/NewsCardList.js";
import { DataStorage } from "./modules/DataStorage.js";
import {dateDisplay, getDateApi} from './utils/date.js';
import {displaysClose, displaysOpen} from './utils/displaysElements.js';

const form = document.querySelector("#form");
const listContainer = document.querySelector(".results__list");
const buttonShowMore = document.querySelector(".results__button");
const buttonSearch = document.querySelector(".search__button");
const preloaderClass = document.querySelector('.preloader');
const notFoundClass = document.querySelector('.not-found');
const listClass = document.querySelector('.results');
const apiData = {
  url: API_URL,
  authorization: "98e7867499484a62bca354bff96d9646",
};

const createNewsCard = (data) => new NewsCard(data, dateDisplay).create();
const setData = (key, data) => dataStorage.setData(key, data);
const getData = (key) => dataStorage.getData(key);

const dataStorage = new DataStorage();
const searchInput = new SearchInput(form, setData, getData);
const newsApi = new NewsApi(apiData, getDateApi, );
const newsCardList = new NewsCardList(listContainer, createNewsCard, buttonShowMore, NUMBER_NEWS_CARDS, buttonSearch);


function portrayList() {
  const getArticles = getData('news');
  if (getArticles.length === 0) {
    displaysOpen(notFoundClass, 'not-found_hidden');
    displaysClose(listClass, 'results_hidden');
  }
  else {
    displaysClose(notFoundClass, 'not-found_hidden');
  }
  newsCardList.renderList(getArticles);
}

searchInput.validationInput();
searchInput.getFieldValue();
newsCardList.addListener();
displaysClose(preloaderClass, 'preloader_hidden');
portrayList();

buttonSearch.addEventListener("click", () => {
  displaysOpen(preloaderClass, 'preloader_hidden');
  displaysClose(listClass, 'results_hidden');
  buttonSearch.setAttribute("disabled", true);
  const keyWord = getData('keyWord');
  newsApi.getNews(keyWord)
  .then((res) => {
    buttonSearch.removeAttribute("disabled");
    displaysClose(preloaderClass, 'preloader_hidden');
    displaysOpen(listClass, 'results_hidden');
    const answerApi = {
     articles: setData('news', res.articles),
     totalResults: setData('numberNews', res.totalResults),
    };
    listContainer.textContent = ''
    portrayList();
  })
  .catch((err) => {
    alert(`Ошибка: ${err}`);
  });
});

//console.log(answerApi)


