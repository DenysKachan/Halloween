var swiper = new Swiper(".ghostsSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    autoplay: {
        delay: 3500,
        stopOnLastSlide: true,
        disableOnInteraction: false,
    },
});

var swiper = new Swiper(".staffSwipper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3500,
        stopOnLastSlide: true,
        disableOnInteraction: false,
    },
});
