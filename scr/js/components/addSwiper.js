import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

function addSwiper(parameters) {
  new Swiper ( '.swiper-container' , parameters)
}

export { addSwiper };
