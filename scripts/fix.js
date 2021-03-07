const showSocialsFixed = () => {
	const btn = document.querySelector(".socials-fixed .button-hover");
	const socials = document.querySelector(".socials-fixed .list-social");
	if (btn) {
		btn.addEventListener("click", (e) => {
			btn.classList.toggle("active");
			socials.classList.toggle("show");
		});
	}
};

document.addEventListener("DOMContentLoaded", (e) => {
	showSocialsFixed();
});
