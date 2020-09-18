$(window).resize(function () {
  if ($(window).width() >= 1024) {
    $('.rates__cards-content').matchHeight({
      byRow: false
    });
    $('.rates__cards-heading').matchHeight({
      byRow: false
    });
  } else {
    $('.rates__cards-heading').matchHeight({
      remove: true
    });
    $('.rates__cards-content').matchHeight({
      remove: true
    });
  }
})

$(document).ready(function () {

  // кнопка ютуб
  $('#play').on('click', function (e) {
    e.preventDefault();
    $("#player")[0].src += "?autoplay=1";
    $('#player').show();
    $('#video-cover').hide();
    $('#play').hide();
  })

  //slider-opportunities

  $('.opportunities__carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    // autoplay: true,
    arrows: false,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
    fade: true,
    cssEase: 'linear',
    appendDots: $(".opportunities__dots"),
    responsive: [{
      breakpoint: 1024,
      settings: {
        adaptiveHeight: false,
      },
    }, ]
  })


  //slider step
  $('.step__list').slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    rows: 0,
    useTransform: false,
    verticalScrolling: true,
    arrows: false,
    cssEase: 'linear',
    adaptiveHeight: false,
    // autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    draggable: false,
    swipe: false,
    dots: true,
    centerPadding: '0px',
    appendDots: $(".step__heading-dots"),
    asNavFor: $(".step__carousel"),
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    }, ]
  })

  $('.step__item').matchHeight({
    byRow: false
  });

  $('.step__carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    useTransform: false,
    rows: 0,
    fade: true,
    cssEase: 'linear',
    draggable: false,
    adaptiveHeight: true,
    // autoplay: true,
    autoplaySpeed: 5000,
    swipe: false,
    asNavFor: '.step__list',
    prevArrow: '<button class="slick-prev"></button>',
    nextArrow: '<button class="slick-next"></button>',
    responsive: [{
        breakpoint: 1024,
        settings: {
          arrows: true,
        }
      },
      {
        breakpoint: 1680,
        settings: {
          adaptiveHeight: false,
        }
      }
    ]
  })

  var $gl = $(".step__list")
  var $gl2 = $(".step__carousel")

  $(".step__list .step__item , .step__heading-dots li button").on("click", function () {
    var index = $(this).attr("data-slick-index")
    var tabIndex = $(this).attr("id")
    $gl2.slick("slickGoTo", index)
    $gl.slick("slickGoTo", index, tabIndex)
  })


  if ($(window).width() >= 1024) {
    $('.rates__cards-content').matchHeight({
      byRow: false
    });
    $('.rates__cards-heading').matchHeight({
      byRow: false
    });
  } else {
    $('.rates__cards-heading').matchHeight({
      remove: true
    });
    $('.rates__cards-content').matchHeight({
      remove: true
    });
  }

  //forms
  jcf.replaceAll();
  jcf.addModule({
    selector: 'select.classname',
  })


  //rates

  $(".rates__show-price").on("change", function () {
    var resultOption = $(this).val()
    $(this).parents('.rates__cards-item').find('.rates__cards-price').text(resultOption)
  })

  $(".rates__show-sale").on("change", function () {
    var resultOption = $(this).val()
    $(this).parents('.rates__select').find('.rates__select-sale').text(resultOption)
  })

  $('.rates__action-button').on('click', function () {
    $('.rates__list').toggleClass('active')
    $('.button--hide').toggleClass('show')
    if ($('.rates__list').hasClass('active')) {
      $('.rates__action-button').text('Свернуть сравнение')
    } else {
      $('.rates__action-button').text('Развернуть сравнение')
    }
  })


  //reviews__carousel
  $(".reviews__carousel").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    focusOnSelect: true,
    variableWidth: true,
    autoplaySpeed: 5000,
    autoplay: true,
    cssEase: 'linear',
    dots: true,
    appendDots: ".reviews__heading-dots",
  })

  //partners__carousel
  var settings = {
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    variableWidth: true,
    autoplaySpeed: 5000,
    // autoplay: true,
    dots: false,
    responsive: [{
      breakpoint: 1024,
      settings: 'unslick',
    }],
  }

  var sl = $('.partners__carousel').slick(settings)

  $(window).on('resize', function () {
    if ($(window).width() > 420 && !sl.hasClass('slick-initialized')) {
      $('.partners__carousel').slick(settings)
    }
  })

  //reviews__faq
  $(".faq__carousel").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    focusOnSelect: true,
    variableWidth: true,
    autoplaySpeed: 5000,
    // autoplay: true,
    cssEase: 'linear',
    dots: true,
    appendDots: ".faq__heading-dots",
  })

  $('.faq__item').matchHeight({
    byRow: false
  });

  $('.faq__item-title').matchHeight({
    byRow: false
  });

  function resizeInput() {
    $(this).attr('size', $(this).val().length).css('width', 'auto');
  }

  $('.form__input').on('click', function () {
    // event handler
    $('.form__input').keyup(resizeInput)
    // resize on page load
    $('.form__input').each(resizeInput);
  })

  //Scroll to id
  function handler(event) {
    var hash = event.target.hash;
    var headerHeight = $('header').height();
    if (hash) {
      event.preventDefault();
      if ($(hash).length) {
        var offset = $(hash).offset().top - 0;
        $('html, body').stop().animate({
          scrollTop: offset
        }, 'slow');
        //console.log(offset);
      }
    }
  }
  //End scroll to id
  $('.navigation__item a, .main-banner__arrow-down').on("click", handler);

})