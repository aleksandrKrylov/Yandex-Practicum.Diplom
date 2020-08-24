const NUMBER_NEWS_CARDS = 3;
const API_URL = NODE_ENV === "production" ? "https://" : "http://";
const PARAMETERS_SWIPER = {
  slidesPerView: 'auto',
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
}

export {NUMBER_NEWS_CARDS, API_URL, PARAMETERS_SWIPER};
