import "../pages/index.css";

import { NUMBER_NEWS_CARDS } from "./constants/constants.js";
import { SearchInput } from "./components/SearchInput.js";
import { NewsApi } from "./modules/NewsApi.js";
import { NewsCard } from "./components/NewsCard.js";
import { NewsCardList } from "./components/NewsCardList.js";
import { DataStorage } from "./modules/DataStorage.js";
import { DisplaysPreloader } from "./components/DisplaysPreloader.js";
import { DisplaysNotFound } from "./components/DisplaysNotFound.js";
import { DisplaysNewsCardList } from "./components/DisplaysNewsCardList.js";
import {getDateNewsCards, getDateApi} from './utils/date.js'

const form = document.querySelector("#form");
const listContainer = document.querySelector(".results__list");
const buttonShowMore = document.querySelector(".results__button");
const buttonSearch = document.querySelector(".search__button");
const preloaderClass = document.querySelector('.preloader');
const notFoundClass = document.querySelector('.not-found');
const listClass = document.querySelector('.results');
const apiUrl =
  NODE_ENV === "production"
    ? "https://nomoreparties.co"
    : "http://nomoreparties.co";
const apiData = {
  url: apiUrl,
  authorization: "98e7867499484a62bca354bff96d9646",
};

const createNewsCard = (data) => new NewsCard(data, getDateNewsCards).create();
const setData = (key, data) => dataStorage.setData(key, data);
const getData = (key) => dataStorage.getData(key);

const dataStorage = new DataStorage();
const searchInput = new SearchInput(form, setData, getData);
const newsApi = new NewsApi(apiData, getDateApi);
const newsCardList = new NewsCardList(listContainer, createNewsCard, buttonShowMore, NUMBER_NEWS_CARDS, buttonSearch);
const preloader = new DisplaysPreloader(preloaderClass);
const notFound = new DisplaysNotFound(notFoundClass);
const list = new DisplaysNewsCardList(listClass);

function portrayList() {
  const getArticles = getData('news'); // возврощаем данные
  if (getArticles.length === 0) {
    notFound.open()
    list.close()
  }
  else {
    notFound.close()
  }
  newsCardList.renderList(getArticles);
}
searchInput.validationInput();
searchInput.getFieldValue();
newsCardList.addListener();
notFound.close()
preloader.close()
portrayList();

buttonSearch.addEventListener("click", () => {
  preloader.open()
  list.close()
  let keyWord = getData('keyWord');
  newsApi.getNewsCards(keyWord)
  .then((res) => {
    preloader.close()
    list.open()
    const answerApi = {
     articles: setData('news', res.articles), // получаем данные
     totalResults: setData('numberNews', res.totalResults),
    };
    listContainer.textContent = ''
    portrayList();
  })
  .catch((err) => {
    alert(`Ошибка: ${err}`);
  });
});








