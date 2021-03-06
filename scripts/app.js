class Tab {
    constructor(selector) {
        this.selector = document.querySelector(selector);
        if (this.selector) {
            this.navigationItems = Array.from(
                this.selector.querySelectorAll("[toggle-for]")
            );
            this.contentList = Array.from(
                this.selector.querySelectorAll("[tab-id]")
            );
            this.init();
        }
    }
    changeTabWhenClicked() {
        this.navigationItems.forEach((element, index) => {
            element.addEventListener("click", (e) => {
                e.preventDefault();
                const tabTarget = element.attributes["toggle-for"].value;
                const targetDOM = Array.from(
                    this.selector.querySelectorAll(`[tab-id='${tabTarget}']`)
                );
                this.navigationItems.forEach((eleClicked, eleClickedIndex) => {
                    if (eleClickedIndex != index) {
                        eleClicked.classList.remove("active");
                    }
                });
                this.contentList.forEach((tabContentElement) => {
                    if (
                        tabContentElement.attributes["tab-id"].value !=
                        tabTarget
                    ) {
                        tabContentElement.style.display = "none";
                        tabContentElement.classList.remove("show");
                    }
                });
                element.classList.add("active");
                targetDOM.forEach((item) => {
                    item.style.display = "block";
                });
                setTimeout(() => {
                    targetDOM.forEach((item) => {
                        item.classList.add("show");
                    });
                }, 50);
            });
        });
    }

    activeFirstTab() {
        if (this.navigationItems.length > 0) {
            this.navigationItems[0].click();
        }
    }

    init() {
        this.changeTabWhenClicked();
        this.activeFirstTab();
    }
}

// SHOW BACK TO TOP
const showBackToTop = () => {
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > $("header").height()) {
            $(".back-to-top").addClass("show");
        } else {
            $(".back-to-top").removeClass("show");
        }
    });
    $(".back-to-top").on("click", function(e) {
        e.preventDefault();
        $("html,body").animate({
            scrollTop: 0,
        });
    });
};

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
            item.addEventListener("click", (e) => {
                e.stopPropagation();
                item.querySelector("ul").classList.toggle("show");
            });
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
        loop: true,
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
        ".slider-index-best-seller .swiper-container", {
            slidesPerView: 1,
            speed: 1000,
            loop: true,
            navigation: {
                nextEl: ".slider-index-best-seller .button-navigation-slider.next",
                prevEl: ".slider-index-best-seller .button-navigation-slider.prev",
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
        loop: true,
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
        ".slider-customers-clients .swiper-container", {
            slidesPerView: 1,
            spaceBetween: 35,
            loop: true,
            navigation: {
                nextEl: ".slider-customers-clients .button-navigation-slider.next",
                prevEl: ".slider-customers-clients .button-navigation-slider.prev",
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
        loop: true,
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
        loop: true,
        navigation: {
            nextEl: ".slider-about-history .button-navigation-slider.next",
            prevEl: ".slider-about-history .button-navigation-slider.prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1025: {
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
        callback: function(box) {
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
        loop: true,
        navigation: {
            nextEl: ".slider-setup-info .button-navigation-slider.next",
            prevEl: ".slider-setup-info .button-navigation-slider.prev",
        },
        breakpoints: {
            500: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });
    let educateTeacherMore = new Swiper(
        ".educate-teacher-more .swiper-container", {
            slidesPerView: 1,
            spaceBetween: 35,
            loop: true,
            navigation: {
                nextEl: ".educate-teacher-more .button-navigation-slider.next",
                prevEl: ".educate-teacher-more .button-navigation-slider.prev",
            },
            breakpoints: {
                500: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 3,
                },
            },
        }
    );
};
const initSetupProject = () => {
    let indexRecipe = new Swiper(".slider-setup-project .swiper-container", {
        slidesPerView: 1,
        spaceBetween: 35,
        loop: true,
        navigation: {
            nextEl: ".slider-setup-project .button-navigation-slider.next",
            prevEl: ".slider-setup-project .button-navigation-slider.prev",
        },
        breakpoints: {
            500: {
                slidesPerView: 1,
            },

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
        loop: true,
        navigation: {
            nextEl: ".slider-setup-feedback .button-navigation-slider.next",
            prevEl: ".slider-setup-feedback .button-navigation-slider.prev",
        },
        breakpoints: {
            500: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });
    let educateFeedback = new Swiper(
        ".slider-educate-feedback .swiper-container", {
            slidesPerView: 1,
            spaceBetween: 35,
            loop: true,
            navigation: {
                nextEl: ".slider-educate-feedback .button-navigation-slider.next",
                prevEl: ".slider-educate-feedback .button-navigation-slider.prev",
            },
            breakpoints: {
                500: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 3,
                },
            },
        }
    );
};
const initEducateImages = () => {
    let indexRecipe = new Swiper(".slider-educate-images .swiper-container", {
        slidesPerView: 1,
        spaceBetween: 35,
        loop: true,
        navigation: {
            nextEl: ".slider-educate-images .button-navigation-slider.next",
            prevEl: ".slider-educate-images .button-navigation-slider.prev",
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
const initEducateInfo = () => {
    let initEducateInfo = new Swiper(".slider-educate-info .swiper-container", {
        slidesPerView: 1,
        spaceBetween: 35,
        loop: true,
        navigation: {
            nextEl: ".slider-educate-info .button-navigation-slider.next",
            prevEl: ".slider-educate-info .button-navigation-slider.prev",
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
const initProductMore = () => {
    let initProductMore = new Swiper(
        ".slider-product-view-more .swiper-container", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            navigation: {
                nextEl: ".slider-product-view-more .button-navigation-slider.next",
                prevEl: ".slider-product-view-more .button-navigation-slider.prev",
            },
            breakpoints: {
                768: {
                    spaceBetween: 30,
                    slidesPerView: 2,
                },
                1200: {
                    spaceBetween: 20,
                    slidesPerView: 4,
                },
            },
        }
    );
};
const changeValueInput = () => {
    $(".qty-up").on("click", function() {
        let qty = Number($("#qty").val());
        $("#qty").val(qty + 1);
    });
    $(".qty-down").on("click", function() {
        let qty = Number($("#qty").val());
        if (qty == 1) {
            $("#qty").val(qty);
            $(this).addClass("active");
        } else {
            $("#qty").val(qty - 1);
        }
    });
};
const libraryFancyApp = () => {
    $("[data-fancybox]").fancybox({
        buttons: [
            "zoom",
            "slideShow",
            "download",
            "fullScreen",
            "share",
            "thumbs",
            "close",
        ],
        thumbs: {
            autoStart: true,
        },
    });
};
const showContentQA = () => {
    $(".QandA li").on("click", function(e) {
        e.preventDefault();
        $(this).find("div").slideToggle();
        $(".QandA li").not(this).find("div").slideUp();
    });
};
const initProductView = () => {
    let initProductViewThumbs = new Swiper(".thumbs .swiper-container", {
        slidesPerView: 3,
        spaceBetween: 10,
        direction: "horizontal",

        breakpoints: {
            768: {
                spaceBetween: 30,
                slidesPerView: 5,
                direction: "horizontal",
            },
            1025: {
                spaceBetween: 20,
                slidesPerView: 5,
                direction: "vertical",
            },
        },
    });
    let initProductView = new Swiper(".images .swiper-container", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: ".images .button-navigation-slider.next",
            prevEl: ".images .button-navigation-slider.prev",
        },
        thumbs: {
            swiper: initProductViewThumbs,
        },
    });
};
const activeTabMenu = () => {
    const url = window.location.hash;
    const id = url.replace("#", "");
    if (url) {
        const listTab = document.querySelectorAll("[toggle-for]");
        listTab.forEach(element => {
            const href = element.getAttribute("toggle-for");
            if (href == id) {
                element.classList.add("active");
            }
        });
    }

}
document.addEventListener("DOMContentLoaded", () => {
    showBackToTop();
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
    initEducateImages();
    initEducateInfo();
    showContentQA();
    initProductMore();
    initProductView();
    changeValueInput();
    libraryFancyApp();
    moveNavOutHeader(1300);
    activeTabMenu();
    const tab = new Tab(".Setup-option .tab-container");
});

window.addEventListener("scroll", () => {
    fixedHeaderWhenScroll();
});

window.addEventListener("resize", () => {
    moveNavOutHeader(1300);
});