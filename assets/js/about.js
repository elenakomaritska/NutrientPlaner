(function ($) {
    $(document).on("load", function () {
        $(".about-banner__description").mCustomScrollbar();
    });
})(jQuery);

$(document).ready(function () {
    //about-banner carousel
    $(".about-banner__carousel").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        focusOnSelect: true,
        variableWidth: true,
        autoplaySpeed: 5000,
        // autoplay: true,
        dots: false,
    })

    $(".about-banner__description").mCustomScrollbar();
})