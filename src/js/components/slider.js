import Swiper, { Pagination } from 'swiper';
Swiper.use([ Pagination]);

const swiper = new Swiper('.about-swiper', {
  pagination: {
		el: '.about-swiper__pagination',
		clickable: true,
	},
  breakpoints: {
		320: {
			slidesPerView: 1,
		},

		1024: {
			slidesPerView: 2,
		},
	},

	autoHeight: true,
	slidesPerView: 2,

});
const swiper1 = new Swiper('.diet-swiper', {
	pagination: {
		el: '.diet-swiper__pagination',
		clickable: true,
	},
  slidesPerView: 4,
	loopedSlides: true,
  breakpoints: {
    // when window width is >= 320px
   320: {
      slidesPerView: 1.5,
      spaceBetween: 20
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    1100: {
      slidesPerView: 4,
      spaceBetween: 25
    }
  },

	loopedSlides: true,

	// autoHeight: true,
	// spaceBetween: 24,



});

