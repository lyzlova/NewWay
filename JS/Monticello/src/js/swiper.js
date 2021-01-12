const swiperNews = new Swiper('.swiper-container-news', {
  cssMode: true,
  slidesPerView: 'auto',
  spaceBetween: 30,
  slidesPerView: 1,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

if (window.matchMedia('(min-width: 1140px)').matches) {
  const swiperNewsForDesk = new Swiper('.swiper-container-news', {
    spaceBetween: 30,
    slidesPerView: 3,
  });
}

const mySwiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  slidesPerView: 1,
  mousewheel: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
