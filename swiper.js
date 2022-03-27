const swiper = new Swiper('.swiper-container', {
effect: 'cube',
grabCursor: true,
cubeEffect: {
    shadow: false,
    slideShadows: true,
    shadowOffset: 1,
    shadowScale: 0.2,
},
pagination: {
    el: '.swiper-pagination',
},
});

//const extendedSwiper = new