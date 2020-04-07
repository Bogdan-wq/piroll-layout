$(document).ready(function () {
    $('.slider').slick({
        arrows:false,
        dots:true,
        infinite: true,
        autoplay:true,
        autoplaySpeed: 3000,
        appendDots: $('.slider__dots'),
        touchMove: false,
        draggable:false
    });
});