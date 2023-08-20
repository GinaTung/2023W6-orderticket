// core version + navigation, pagination modules:
import Swiper from 'swiper';
// import Swiper and modules styles
import 'swiper/css';

const swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto", 
    allowTouchMove: false, 
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    loop: true,
    speed: 3000,
  });