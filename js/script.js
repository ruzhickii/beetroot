$('#slider').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    appendArrows: $('.slider-nav'),
    prevArrow: '<div class="slider-nav__item slider-nav__prev">Prev</div>',
    nextArrow: '<div class="slider-nav__item slider-nav__next">Next</div>'

});