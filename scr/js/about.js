import 'swiper/swiper-bundle.css';
import "../pages/about.css";

import { GithubApi } from "./modules/GithubApi.js";
import { API_URL, PARAMETERS_SWIPER } from "./constants/constants.js";
import { DataStorage } from "./modules/DataStorage.js";
import { dateDisplay } from './utils/date.js'
import { CommitCard } from "./components/CommitCard.js";
import { CommitCardList } from "./components/CommitCardList.js";
import { addSwiper } from "./components/addSwiper.js";

const swiperWrapper = document.querySelector('.swiper-wrapper')

const setData = (key, data) => dataStorage.setData(key, data);
const getData = (key) => dataStorage.getData(key);
const createCommitCard = (data) => new CommitCard(data, dateDisplay).create();

const dataStorage = new DataStorage();
const githubApi = new GithubApi(API_URL);
const commitCardList = new CommitCardList(swiperWrapper, createCommitCard);

githubApi.getCommits()
.then((res) => {
  setData('commit', res)
})
.catch((err) => {
  alert(`Ошибка: ${err}`);
});

function portrayList() {
  const getCommit = getData('commit');
  commitCardList.render(getCommit);
  addSwiper(PARAMETERS_SWIPER);
}

portrayList();


