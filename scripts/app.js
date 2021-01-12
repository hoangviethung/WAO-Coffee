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
	const overlay = document.querySelector(".overlay");
	const body = document.querySelector("body");
	// CHECK BUTTON
	if (btn) {
		btn.addEventListener("click", () => {
			navigation.classList.add("active");
			overlay.classList.add("active");
			body.classList.add("no-scroll");
		});
	}
	if (close) {
		close.addEventListener("click", () => {
			navigation.classList.remove("active");
			overlay.classList.remove("active");
			body.classList.remove("no-scroll");
		});
	}
	if (overlay) {
		overlay.addEventListener("click", () => {
			navigation.classList.remove("active");
			overlay.classList.remove("active");
			body.classList.remove("no-scroll");
		});
	}
};
const moveNavOutHeader = (responsive) => {
	const nav = document.querySelector("nav");
	const body = document.querySelector("body");
	const header = document.querySelector("header .nav-config-mobile");
	if (window.innerWidth < responsive) {
		if (nav && body) {
			body.append(nav);
		}
	} else {
		if (nav && header) {
			header.appendChild(nav);
		}
	}
};
const initHeroBanner = () => {
	let heroBanner = new Swiper(".hero-banner .swiper-container", {
		speed: 1500,
		autoplay: true,
		autoplay: {
			delay: 7000,
		},
		pagination: {
			el: ".hero-banner .swiper-pagination",
			type: "bullets",
			clickable: true,
		},
		navigation: {
			nextEl: ".hero-banner .button-navigation-slider.next",
			prevEl: ".hero-banner .button-navigation-slider.prev",
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
const initIndexCustomersClients = () => {
	let customersClients = new Swiper(
		".slider-customers-clients .swiper-container",
		{
			slidesPerView: 1,
			spaceBetween: 35,
			navigation: {
				nextEl:
					".slider-customers-clients .button-navigation-slider.next",
				prevEl:
					".slider-customers-clients .button-navigation-slider.prev",
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
		}
	);
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
const initAboutHistory = () => {
	let aboutHistory = new Swiper(".slider-about-history .swiper-container", {
		slidesPerView: 1,
		navigation: {
			nextEl: ".slider-about-history .button-navigation-slider.next",
			prevEl: ".slider-about-history .button-navigation-slider.prev",
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 4,
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
const initSetupInfo = () => {
	let indexRecipe = new Swiper(".slider-setup-info .swiper-container", {
		slidesPerView: 1,
		spaceBetween: 35,
		navigation: {
			nextEl: ".slider-setup-info .button-navigation-slider.next",
			prevEl: ".slider-setup-info .button-navigation-slider.prev",
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
const initSetupProject = () => {
	let indexRecipe = new Swiper(".slider-setup-project .swiper-container", {
		slidesPerView: 1,
		spaceBetween: 35,
		navigation: {
			nextEl: ".slider-setup-project .button-navigation-slider.next",
			prevEl: ".slider-setup-project .button-navigation-slider.prev",
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
const initSetupFeedback = () => {
	let indexRecipe = new Swiper(".slider-setup-feedback .swiper-container", {
		slidesPerView: 1,
		spaceBetween: 35,
		navigation: {
			nextEl: ".slider-setup-feedback .button-navigation-slider.next",
			prevEl: ".slider-setup-feedback .button-navigation-slider.prev",
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
document.addEventListener("DOMContentLoaded", () => {
	fixedHeaderWhenScroll();
	showMenuMobile();
	initializeSubMenu();
	initHeroBanner();
	initIndexBestSeller();
	initIndexRecipe();
	initIndexCustomersClients();
	initIndexNews();
	initAboutHistory();
	initializeWowJs();
	initSetupInfo();
	initSetupProject();
	initSetupFeedback();
	moveNavOutHeader(1300);
});

window.addEventListener("scroll", () => {
	fixedHeaderWhenScroll();
});

window.addEventListener("resize", () => {
	moveNavOutHeader(1300);
});
