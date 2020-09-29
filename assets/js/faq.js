$(document).ready(function () {

    //reviews__faq
    $(".faq__carousel").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        focusOnSelect: true,
        variableWidth: true,
        autoplaySpeed: 5000,
        // autoplay: true,
        cssEase: 'linear',
        dots: false,
        responsive: [{
            breakpoint: 1680,
            settings: {
                slidesToShow: 2,
            },
        }]
    })

})