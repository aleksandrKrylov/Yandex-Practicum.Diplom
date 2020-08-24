import "../pages/analytics.css";

import { AnalyticsHeader } from "./components/AnalyticsHeader.js";
import { AnalyticsCardList } from "./components/AnalyticsCardList.js";
import { DataStorage } from "./modules/DataStorage.js";
import { getDateApi, getDatedaysWeeks } from "./utils/date.js";

const textHeader = {
  title: document.querySelector(".about-request__keyWord"),
  statisticsWeek: document.querySelector(".about-request__week"),
  mentionsTitles: document.querySelector(".about-request__mentions-titles"),
};

const getData = (key) => dataStorage.getData(key);

const dataStorage = new DataStorage();
const searchKeyWord = new RegExp(getData("keyWord"), "gi");

let itemStatistics = document.querySelectorAll(".analytics__item-statistics");
let itemDate = document.querySelectorAll(".analytics__item-date");
const analyticsHeader = new AnalyticsHeader(getData, textHeader, searchKeyWord);
const analyticsCardList = new AnalyticsCardList(itemStatistics, amountInterest, itemDate, getDatedaysWeeks
);

analyticsHeader.renderHeader();


function quantityСoincidence(bremi) {
  let quantity = 0;
  let newsData = getData("news");
  for (let i = 0; i < newsData.length; i++) {
    if (newsData[i].publishedAt.split("T").shift() === bremi) {
      if (newsData[i].title !== null && newsData[i].description !== null) {
        if (
          newsData[i].title.match(searchKeyWord) &&
          newsData[i].description.match(searchKeyWord)
        ) {
          quantity++;
        }
      }
    }
  }
  return quantity;
}

let arr = [];
let quantityСoincidenceDatas = arr.concat(
  quantityСoincidence(getDateApi(new Date(), 0)),
  quantityСoincidence(getDateApi(new Date(), 1)),
  quantityСoincidence(getDateApi(new Date(), 2)),
  quantityСoincidence(getDateApi(new Date(), 3)),
  quantityСoincidence(getDateApi(new Date(), 4)),
  quantityСoincidence(getDateApi(new Date(), 5)),
  quantityСoincidence(getDateApi(new Date(), 6))
);

function amountInterest() {
  let sum = 0;
  quantityСoincidenceDatas.forEach((data) => {
    sum = sum + data;
  });
  let doubles = quantityСoincidenceDatas.map(function (num) {
    return Math.round((num / sum) * 100);
  });
  return doubles;
}
if ( getData('numberNews') >= 7) {
analyticsCardList.renderStatistics();
}
analyticsCardList.renderDate();
