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
