import "../pages/index.css";

import { NUMBER_NEWS_CARD } from "./constants/constants.js";
import { SearchInput } from "./components/SearchInput.js";
import { NewsApi } from "./modules/NewsApi.js";
import { NewsCard } from "./components/NewsCard.js";
import { NewsCardList } from "./components/NewsCardList.js";
import { DataStorage } from "./modules/DataStorage.js";

const form = document.querySelector("#form");
const containerList = document.querySelector(".results__list");
const buttonShowMore = document.querySelector(".results__button");
const buttonSearch = document.querySelector(".search__button");

const apiUrl =
  NODE_ENV === "production"
    ? "https://nomoreparties.co"
    : "http://nomoreparties.co";
const apiData = {
  url: apiUrl,
  authorization: "98e7867499484a62bca354bff96d9646",
};
const createNewsCard = (data) => new NewsCard(data).create();
const setData = (key, data) => dataStorage.setData(key, data);
const getData = (key) => dataStorage.getData(key);

const dataStorage = new DataStorage();
const searchInput = new SearchInput(form, setData, getData);
const newsApi = new NewsApi(apiData);
const newsCardList = new NewsCardList(containerList, createNewsCard, buttonShowMore, NUMBER_NEWS_CARD, containerList);

function portrayList() {
  const getArticles = getData('news'); // возврощаем данные
  newsCardList.renderList(getArticles);
}

searchInput.validationInput();
searchInput.getFieldValue();
newsCardList.addListener();

buttonSearch.addEventListener("click", () => {
  let keyWord = getData('keyWord');
  newsApi.getNewsCards(keyWord)
  .then((res) => {
    const answerApi = {
     articles: setData('news', res.articles), // получаем данные
     totalResults: setData('numberNews', res.totalResults),
    };
    containerList.textContent = ''
    portrayList();
  })
  .catch((err) => {
    alert(`Ошибка: ${err}`);
  });
});

  portrayList();

