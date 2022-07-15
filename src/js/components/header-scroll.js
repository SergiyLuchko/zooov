const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;

let lastScrollTop = 0;

window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;

	if (scrollDistance >= headerHeight) {
		header.classList.add('header--fixed');
		first.style.marginTop = `${headerHeight}px`;
	} else {
		header.classList.remove('header--fixed');
		first.style.marginTop = null;
	}


});


