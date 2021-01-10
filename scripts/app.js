const fixedHeaderWhenScroll = () => {
	const header = document.querySelector("header");
	if (window.pageYOffset > header.offsetHeight) {
		header.classList.add("fixed");
	} else {
		header.classList.remove("fixed");
	}
};
const initializeSubMenu = () => {
	const itemsNaviation = document.querySelectorAll("nav ul li");
	itemsNaviation.forEach((item) => {
		const sub = item.querySelector("ul");
		if (sub) {
			item.classList.add("has-sub");
		}
	});
};
const showMenuMobile = () => {
	const btn = document.querySelector(".toggle-menu-mobile");
	const close = document.querySelector(".close-menu-mobile");
	const navigation = document.querySelector("nav");
	// CHECK BUTTON
	if (btn) {
		btn.addEventListener("click", () => {
			navigation.classList.add("active");
		});
	}
	if (close) {
		close.addEventListener("click", () => {
			navigation.classList.remove("active");
		});
	}
};
const initHeroBanner = () => {
	let heroBanner = new Swiper(".hero-banner .swiper-container", {
		speed: 1500,
		autoplay: true,
		autoplay: {
			delay: 3000,
		},
		pagination: {
			el: ".hero-banner .swiper-pagination",
			type: "bullets",
			clickable: true,
		},
	});
};
const initIndexBestSeller = () => {
	let indexBestSeller = new Swiper(
		".slider-index-best-seller .swiper-container",
		{
			slidesPerView: 1,
			speed: 1000,
			navigation: {
				nextEl:
					".slider-index-best-seller .button-navigation-slider.next",
				prevEl:
					".slider-index-best-seller .button-navigation-slider.prev",
			},
			breakpoints: {
				990: {
					slidesPerView: 2,
				},
				1200: {
					slidesPerView: 3,
				},
			},
		}
	);
};
const initIndexRecipe = () => {
	let indexRecipe = new Swiper(".slider-index-recipe .swiper-container", {
		slidesPerView: 1,
		spaceBetween: 35,
		navigation: {
			nextEl: ".slider-index-recipe .button-navigation-slider.next",
			prevEl: ".slider-index-recipe .button-navigation-slider.prev",
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			},
		},
	});
};
const initIndexCustomer = () => {
	let indexCustomer = new Swiper(".slider-index-customer .swiper-container", {
		slidesPerView: 1,
		spaceBetween: 35,
		navigation: {
			nextEl: ".slider-index-customer .button-navigation-slider.next",
			prevEl: ".slider-index-customer .button-navigation-slider.prev",
		},
		breakpoints: {
			414: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 5,
			},
		},
	});
};
const initIndexNews = () => {
	let indexNews = new Swiper(".slider-index-news .swiper-container", {
		slidesPerView: 1,
		spaceBetween: 35,
		navigation: {
			nextEl: ".slider-index-news .button-navigation-slider.next",
			prevEl: ".slider-index-news .button-navigation-slider.prev",
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			},
		},
	});
};
const initializeWowJs = () => {
	var wow = new WOW({
		boxClass: "wow", // animated element css class (default is wow)
		animateClass: "animated", // animation css class (default is animated)
		offset: 0, // distance to the element when triggering the animation (default is 0)
		mobile: true, // trigger animations on mobile devices (default is true)
		live: true, // act on asynchronously loaded content (default is true)
		callback: function (box) {
			// the callback is fired every time an animation is started
			// the argument that is passed in is the DOM node being animated
		},
		scrollContainer: null, // optional scroll container selector, otherwise use window,
		resetAnimation: true, // reset animation on end (default is true)
	});
	wow.init();
};

document.addEventListener("DOMContentLoaded", () => {
	fixedHeaderWhenScroll();
	showMenuMobile();
	initializeSubMenu();
	initHeroBanner();
	initIndexBestSeller();
	initIndexRecipe();
	initIndexCustomer();
	initIndexNews();
	initializeWowJs();
});

window.addEventListener("scroll", () => {
	fixedHeaderWhenScroll();
});
