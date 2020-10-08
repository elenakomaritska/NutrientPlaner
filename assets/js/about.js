(function ($) {
    $(document).on("load", function () {
        $(".about-banner__description").mCustomScrollbar();
    });
})(jQuery);

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 200) {
            $('header').css('background-color', '#fff').removeClass('out').removeClass('topAbsolute')
                .css('position', 'fixed').addClass('active')
        } else if ($(window).scrollTop() >= 400) {
            $('header').addClass('out')
        } else {
            $('header').css('background-color', 'inherit').css('position', 'absolute').addClass('topAbsolute')

        }
    });

    //about-banner carousel
    $(".about-banner__carousel").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        // arrows: false,
        focusOnSelect: true,
        variableWidth: true,
        autoplaySpeed: 5000,
        // autoplay: true,
        dots: false,
        prevArrow: $('.about-banner__prev'),
        nextArrow: $('.about-banner__next'),
        responsive: [{
                breakpoint: 1680,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            }
        ],
    })

    // $(".about-banner__description").mCustomScrollbar();
})