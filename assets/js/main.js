document.addEventListener("touchstart", function () {}, true);

$(document).ready(function () {

    //Меню

    $('.menu-burger').on('click', function () {
        $('.header__navigation').toggleClass('active').css('transition', '0.5s linear')
        $('.header__overlay').toggleClass('active')
    });

    $('.header__navigation a , .navigation__link').on('click', function () {
        $('.header__navigation').removeClass('active');
        $('.header__overlay').removeClass('active')
    });

    $('.header__overlay').on('click', function () {
        $('.header__navigation').removeClass('active')
        $(this).removeClass('active')
    });

    if ($(window).width() >= 1024) {
        $('.header').removeClass('active');
    }

    //Попапы
    jQuery(function (a) {
            a(document).mouseup(function (b) {
                var c = a(".modall__inner");
                c.is(b.target) || 0 !== c.has(b.target).length || (c.removeClass("active-modall"),
                    a(".modall").removeClass("active-modall"),
                    a(".body").removeClass("showing-modal"))
            })
        }),

        $('.close').on('click', function () {
            $(".modall").removeClass('active-modall');
            $('.body').removeClass('showing-modal');
            $("#playerPopoup").attr('src', '')
        });

    $('.application').on('click', function () {
        $(".modall").removeClass('active-modall');
        $(".modall-application").addClass('active-modall');
        $('.body').addClass('showing-modal');
    });


    jQuery(".only_number").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    });

});