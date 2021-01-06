const initHeroBanner = () => {
	let heroBanner = new Swiper(".hero-banner .swiper-container");
};
const initIndexBestSeller = () => {
	let indexBestSeller = new Swiper(
		".slider-index-best-seller .swiper-container",
		{
			slidesPerView: 3,
			navigation: {
				nextEl:
					".slider-index-best-seller .button-navigation-slider.next",
				prevEl:
					".slider-index-best-seller .button-navigation-slider.prev",
			},
		}
	);
};

document.addEventListener("DOMContentLoaded", () => {
	initHeroBanner();
	initIndexBestSeller();
});
