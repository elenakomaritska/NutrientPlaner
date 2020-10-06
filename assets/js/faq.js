$(document).ready(function () {

    //reviews__faq
    $("#carousel").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // arrows: false,
        fade: false,
        focusOnSelect: true,
        variableWidth: true,
        autoplaySpeed: 5000,
        appendArrows: $('#faq__holder .faq__holder-buttons'),
        prevArrow: '<button type="button" id="prev-01" class="faq__prev"></button>',
        nextArrow: '<button type="button" id="next-01"class="faq__next"></button>',
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

    $("#carousel-two").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        fade: false,
        focusOnSelect: true,
        variableWidth: true,
        autoplaySpeed: 5000,
        appendArrows: $('#faq__holder-two .faq__holder-buttons'),
        prevArrow: '<button type="button" id="prev-02" class="faq__prev"></button>',
        nextArrow: '<button type="button" id="next-02"class="faq__next"></button>',
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

    $("#carousel-three").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // arrows: false,
        fade: false,
        focusOnSelect: true,
        variableWidth: true,
        autoplaySpeed: 5000,
        appendArrows: $('#faq__holder-three .faq__holder-buttons'),
        prevArrow: '<button type="button" id="prev-02" class="faq__prev"></button>',
        nextArrow: '<button type="button" id="next-02"class="faq__next"></button>',
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


    //show block
    $('#faq__action-one').on('click', function () {
        $('#carousel-two').css('display', 'none')
        $('#faq__action-one').css('display', 'none')
        $('#faq__show-one').css('display', 'flex')
    })
    $('#faq__hide-one').on('click', function () {
        $('#carousel-two').css('display', 'block')
        $('#faq__action-one').css('display', 'block')
        $('#faq__show-one').css('display', 'none')
    })

    $('#faq__action-two').on('click', function () {
        $('#carousel-three').css('display', 'none')
        $('#faq__action-two').css('display', 'none')
        $('#faq__show-two').css('display', 'flex')
    })
    $('#faq__hide-two').on('click', function () {
        $('#carousel-three').css('display', 'block')
        $('#faq__action-two').css('display', 'block')
        $('#faq__show-two').css('display', 'none')
    })

    //Ссылка скрыть

    $('#faq__link-one').on('click', function () {
        if ($(this).hasClass("active")) {
            $('#carousel-two').css('display', 'block')
            $('#faq__action-one').css('display', 'block')
            $('#faq__show-one').css('display', 'none')
            $(this).removeClass('active').text('Скрыть')
        } else {
            $('#carousel-two').css('display', 'none')
            $('#faq__action-one').css('display', 'none')
            $('#faq__show-one').css('display', 'none')
            $(this).addClass('active').text('Раскрыть')
        }
    })

    $('#faq__link-two').on('click', function () {
        if ($(this).hasClass("active")) {
            $('#carousel-three').css('display', 'block')
            $('#faq__action-two').css('display', 'block')
            $('#faq__show-two').css('display', 'none')
            $(this).removeClass('active').text('Скрыть')
        } else {
            $('#carousel-three').css('display', 'none')
            $('#faq__action-two').css('display', 'none')
            $('#faq__show-two').css('display', 'none')
            $(this).addClass('active').text('Раскрыть')
        }
    })

})