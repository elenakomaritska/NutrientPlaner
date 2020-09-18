document.addEventListener("touchstart", function () {}, true);

$(document).ready(function () {

    //Меню

    $('.menu-burger').on('click', function () {
<<<<<<< Updated upstream
        $('.header__navigation').toggleClass('active').css('transition', '0.5s linear')
        $('.header__overlay').toggleClass('active')
    });

    $('.header__navigation a , .navigation__link').on('click', function () {
        $('.header__navigation').removeClass('active');
        $('.header__overlay').removeClass('active')
    });

    $('.header__overlay').on('click', function () {
        $('.header__navigation').removeClass('active')
=======
        $('.navigation__inner').toggleClass('active').css('transition', '0.5s linear')
        $('.header__overlay').toggleClass('active')
    });

    $('.navigation__inner a').on('click', function () {
        $('.navigation__inner').removeClass('active');
    });

    $('.header__overlay').on('click', function () {
        $('.navigation__inner').removeClass('active')
>>>>>>> Stashed changes
        $(this).removeClass('active')
    });

    if ($(window).width() >= 1024) {
        $('.header').removeClass('active');
    }

    //Попапы
    jQuery(function (a) {
            a(document).mouseup(function (b) {
                var c = a(".modall-body");
                c.is(b.target) || 0 !== c.has(b.target).length || (c.removeClass("active-modall"),
                        a(".modall").removeClass("active-modall"),
                        a(".body").removeClass("showing-modal")),
                    $("#playerPopoup").attr('src', '')
            })
        }),

        $('.close').on('click', function () {
            $(".modall").removeClass('active-modall');
            $('.body').removeClass('showing-modal');
            $("#playerPopoup").attr('src', '')
        });

    // $('.link-video').on('click', function () {
    //     $(".modall").removeClass('active-modall');
    //     $(".modall-video").addClass('active-modall');
    //     $('.body').addClass('showing-modal');
    // });

    jQuery(".only_number").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    });

});