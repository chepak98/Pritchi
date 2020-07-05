$(function() {

    $('.slider__items').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
    });
    $('.menu__btn').on('click',
        function() {
            $('.header__menu-list').slideToggle();
        });
});