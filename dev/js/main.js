/**
 * Удаление лоадера из dom дерева после загрузки страницы
 * Скрипт отрабатывает в любом случае, даже если есть ошибки в JS
 */
window.onload = function() {
  let loader = document.querySelector('.loader');
  loader.parentNode.removeChild(loader);
};


$(document).ready(function() {
  /** Глобальные переменные */
  var WIN = $(window),
    DOC = $(document),
    HTML = $('html');

  /** Определяем браузеры Internet Explorer 11 и Edge */
  let ua = window.navigator.userAgent,
    edge_ua = ua.indexOf('Edge/'),
    ie_ua = ua.indexOf('Trident/7.0'),
    edge = 'edge',
    ie = 'ie';
  if (edge_ua > 0) {
    HTML.addClass(edge);
  }
  if (ie_ua + 1) {
    HTML.addClass(ie);
  }

  /** Добавляем стили и скрипты для браузера Internet Explorer 11 */
  if (HTML.hasClass(ie)) {
    HTML.append('<script src="../../js/' + ie + '.js"></script>');
    HTML.append('<link href="../../css/' + ie + '.css" rel="stylesheet">');
  }

  // ---------------------------------------------------------------------------
  /** Мобильное меню **/
  function mobileMenu() {
    let opener = $('[data-mobile-menu]');
    let wrapper = $('[data-mobile-wrapper]');
    let closer = $('[data-mobile-menu-closer]');
    opener.on('click', function(e) {
      e.preventDefault();
      let that = $(e.target);
      if (!that.hasClass('close')) {
        wrapper.addClass('opened');
      } else {
        wrapper.removeClass('opened');
      }
    })
    closer.on('click', function(e) {
      e.preventDefault();
      wrapper.removeClass('opened');
    })
  }
  mobileMenu();


  // ---------------------------------------------------------------------------
  window.addEventListener("orientationchange", function() {
    $('.mobile-wrapper.opened').each(function() {
      $('.mobile-wrapper.opened').removeClass('opened');
    });
  }, false);

  function mobileMenuUser() {
    let opener = $('[data-mobile-menu-user]');
    let wrapper = $('[data-mobile-wrapper-user]');
    let closer = $('[data-mobile-menu-closer]');
    opener.on('click', function(e) {
      e.preventDefault();
      let that = $(e.target);
      if (!that.hasClass('close')) {
        wrapper.addClass('opened');
      } else {
        wrapper.removeClass('opened');
      }
    })
    closer.on('click', function(e) {
      e.preventDefault();
      wrapper.removeClass('opened');
    })
  }
  mobileMenuUser();
  /** End мобильного меню **/


  // ---------------------------------------------------------------------------
  /** Рейтинг игры на странице Demo game **/
  var rating = $('[data-rating]');
  var isLogged = rating.data('logged') ? true : false;

  rating.rating({
    fx: 'half',
    image: '/img/elements/stars.png',
    loader: '/img/elements/ajax-loader.gif',
    readOnly: isLogged
  });
  if (isLogged) {
    $('.vote-hover').css({
      'cursor': 'default'
    });
  }
  /** End Рейтинг игры на странице Demo game **/


  /* ------ Cлайдер на странице c играми ------------------------------------ */
  var mainSlider = new Swiper('[data-slider-main]', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    initialSlide: 0,
    preloadImages: true,
    lazy: true,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: true
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
  /* ------------------------------------------------------------------------ */


  /* ----- Cлайдер game-types menu ------------------------------------------ */
  $('[data-games-types-slider]').each(function() {
    var name = $(this);
    var gamesTypesSliderMenu = new Swiper(name.find('.swiper-container'), {
      loop: true,
      spaceBetween: 0,
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      slideToClickedSlide: true,
      freeModeMomentum: true,
      speed: 600,
      mousewheel: {
        invert: true,
      },
      coverflowEffect: {
        rotate: 0,
        stretch: -60,
        depth: 150,
        modifier: 1,
        slideShadows: true,
      },
      slideClass: 'games-types__menu-item',
      navigation: {
        nextEl: '.slider-arrow--next',
        prevEl: '.slider-arrow--prev'
      },
      breakpoints: {
        768: {
          coverflowEffect: {
            stretch: -50,
          },
        },
        480: {
          coverflowEffect: {
            stretch: -25,
            depth: 300,
          },
        }
      }
    });
  });
  /* ------------------------------------------------------------------------ */


  // ---------------------------------------------------------------------------
  $('.games__select-label-holder').click(function() {
    $(this).toggleClass('active');
    $(this).next('.games__menu-wrapper').toggleClass('active');
  });


  // ---------------------------------------------------------------------------
  /** Закрытие menu при клике вне его **/
  DOC.on('click', function(e) {
    if (!$(e.target).closest(".games__select-label-holder").length) {
      $('.games__select-label-holder').removeClass('active');
      $('.games__menu-wrapper').removeClass('active');
    }
    e.stopPropagation();
  });


  // ---------------------------------------------------------------------------
  /** Слайдер jackpots на главной **/
  $('[data-jackpots-slider]').each(function() {
    // используемые классы
    let name = $(this);

    let jackpotsSlider = new Swiper(name.find('.swiper-container'), {
      slidesPerView: 1,
      slidesPerGroup: 1,
      initialSlide: 0,
      loop: true,
      navigation: {
        prevEl: '.slider-arrow--prev',
        nextEl: '.slider-arrow--next',
      }
    });
  });


  // ---------------------------------------------------------------------------
  /** Слайдер победителей на главной **/
  var winnersSlider = new Swiper('[data-winners-slider] .swiper-container', {
    loop: true,
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 30,
    breakpoints: {
      580: {
        slidesPerView: 1,
        slidesPerGroup: 1
      },
      1024: {
        slidesPerView: 2,
        slidesPerGroup: 1
      },
      1440: {
        slidesPerView: 3,
        slidesPerGroup: 1
      }
    }
  });
  /**  End Слайдер победителей на главной **/


  // ---------------------------------------------------------------------------
  /** Слайдер новостей на главной **/
  var newsSlider = new Swiper('[data-news-slider] .swiper-container', {
    // speed: 1000,
    loop: true,
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 30,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false
    // },
    // navigation: {
    //   prevEl: '.swiper-arrow--prev',
    //   nextEl: '.swiper-arrow--next',
    // },
    breakpoints: {
      580: {
        slidesPerView: 1,
        slidesPerGroup: 1
      },
      1024: {
        slidesPerView: 2,
        slidesPerGroup: 1
      },
      1220: {
        slidesPerView: 3,
        slidesPerGroup: 1
      }
    }
  });
  /** End слайдер новостей на главной **/


  // ---------------------------------------------------------------------------
  /** Слайдер турнирных игр на странице турниры и турнир **/
  $('[data-recent-games-slider]').each(function() {
    // используемые классы
    let name = $(this);
    let recentSlider = new Swiper(name.find('.swiper-container'), {
      speed: 1000,
      slideClass: 'games-recent__item',
      slidesPerView: 5,
      slidesPerGroup: 1,
      spaceBetween: 25,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false
      },

      breakpoints: {
        480: {
          slidesPerView: 1,
          slidesPerGroup: 1

        },
        980: {
          slidesPerView: 2,
          slidesPerGroup: 2

        },
        1200: {
          slidesPerView: 3,
          slidesPerGroup: 3
        },
        1440: {
          slidesPerView: 4,
          slidesPerGroup: 4
        }
      }
    });
  });

  // ---------------------------------------------------------------------------
  /** Слайдер турнирных игр на странице турниры и турнир **/
  $('[data-related-games-slider]').each(function() {
    // используемые классы
    let name = $(this);
    let recentSlider = new Swiper(name.find('.swiper-container'), {
      slideClass: 'games__item',
      slidesPerView: 5,
      slidesPerGroup: 1,
      spaceBetween: 30,
      navigation: {
        nextEl: '.slider-arrow--next',
        prevEl: '.slider-arrow--prev'
      },
      breakpoints: {
        580: {
          slidesPerView: 1,
          slidesPerGroup: 1
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 1
        },
        1024: {
          slidesPerView: 3,
          slidesPerGroup: 1
        },
        1380: {
          slidesPerView: 4,
          slidesPerGroup: 1
        }
      }
    });
  });

  // ---------------------------------------------------------------------------
  /** Слайдер выбора бонуса на депозит в модалке **/
  function chooseBonus() {
    $('[data-choose-bonus-slider]').each(function() {
      let name = $(this);
      if (name.length > 0 && name.is(':visible') && name.find('.swiper-slide-active').length < 1) {
        // используемые классы
        let chooseSlider = new Swiper(name.find('.swiper-container'), {
          slideClass: 'bonuses__item',
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 25,
          pagination: {
            el: name.find('.swiper-pagination'),
            clickable: true
          },
          navigation: {
            nextEl: name.find(' .slider-arrow--next'),
            prevEl: name.find(' .slider-arrow--prev'),
          }
        });
      }

    });
  }
  chooseBonus();


  // ---------------------------------------------------------------------------
  /**  Search input **/
  $('.search').click(function() {
    $(this).toggleClass('active');
    $(this).next('.search-bar').toggleClass('active');
  });
  /**  End search input **/


  // ---------------------------------------------------------------------------
  /** Tabs + cookie / profile: bonuses player page -------------- **/
  function bonusesSwitcher(e) {
    const bonusesActive = $('[data-bonuses-active]');
    const bonusesActiveContent = $('[data-bonuses-active-content]');

    const bonusesAvailable = $('[data-bonuses-available]');
    const bonusesAvailableContent = $('[data-bonuses-available-content]');

    bonusesAvailable.on('click', function() {
      bonusesActive.removeClass('active');
      bonusesActiveContent.removeClass('active');
      bonusesAvailable.addClass('active');
      bonusesAvailableContent.addClass('active');
      $.cookie('BonusesSwitcher', 'bonuses-available', {
        path: '/'
      });
      lazyLoad();
    });

    bonusesActive.on('click', function() {
      bonusesAvailable.removeClass('active');
      bonusesAvailableContent.removeClass('active');
      bonusesActive.addClass('active');
      bonusesActiveContent.addClass('active');
      $.cookie('BonusesSwitcher', 'bonuses-active', {
        path: '/'
      });
      lazyLoad();
    });
  }

  bonusesSwitcher();
  /** End Tabs profile bonuses **/


  // ---------------------------------------------------------------------------
  /* Стилизация скроллабара в блоках */
  $('[data-scrollbar]').scrollbar({
    "showArrows": true,
    "scrolly": 'advanced',
    "ignoreOverlay": true
  });

  $('.scroll-wrapper').each(function() {
    setTimeout(function() {
      if ($(this).height() < $(this).parent().height()) {
        $(this).addClass('scroll--void').find('.scroll-element').hide();
      }
    }, 100);
  });


  // ---------------------------------------------------------------------------
  /** ADD cookies profile bonuses switcher **/
  function setBonusesView() {
    if ($.cookie('BonusesSwitcher') == null) {
      $.cookie('BonusesSwitcher', 'bonuses-available', {
        path: '/'
      });
    }
    if ($.cookie('BonusesSwitcher') == 'bonuses-available') {
      $('[data-bonuses-available]').click();
    }

    if ($.cookie('BonusesSwitcher') == 'bonuses-active') {
      $('[data-bonuses-active]').click();
    }
  }

  setBonusesView();
  /** END ADD cookies profile bonuses switcher **/


  // ---------------------------------------------------------------------------
  /**  accordion / game page **/
  DOC.on('click', '.accordion__item-header', function() {
    var item = $(this).parents('.accordion__item');
    item.siblings().removeClass('accordion__item--open');
    item.toggleClass('accordion__item--open');
  });
  /** end accordion / game page **/

  // ---------------------------------------------------------------------------
  /* обрезка текстовых привью (количество символов береться из дата атрибута) */
  var shortText = $('[data-cut-text]');
  shortText.each(function() {
    var size = $(this).data('cutText'),
      elementText = $(this).text();
    if (elementText.length > size) {
      $(this).text(elementText.slice(0, size) + ' ...');
    }
  });


  // ---------------------------------------------------------------------------
  /** Описание бонуса с flip-эффекто **/
  $('[data-bonus-fliper]').click(function() {
    var bonus = $(this).parents('[data-bonus-flip]');
    bonus.toggleClass('flip');
  });
  /** End **/


  // ---------------------------------------------------------------------------
  /** Mobile tables **/
  (function() {
    var headertext = [];
    var headers = document.querySelectorAll("thead");
    var tablebody = document.querySelectorAll("tbody");

    for (var i = 0; i < headers.length; i++) {
      headertext[i] = [];
      for (var j = 0, headrow; headrow = headers[i].rows[0].cells[j]; j++) {
        var current = headrow;
        headertext[i].push(current.textContent.replace(/\r?\n|\r/, ""));
      }
    }
    if (headers.length > 0) {
      for (var h = 0, tbody; tbody = tablebody[h]; h++) {
        for (var i = 0, row; row = tbody.rows[i]; i++) {
          for (var j = 0, col; col = row.cells[j]; j++) {
            col.setAttribute("data-label", headertext[h][j]);
          }
        }
      }
    }
  }());
  /** End Mobile tables **/


  // ---------------------------------------------------------------------------
  //-- List to Grid view for Accounts page
  function viewSwitcherAccounts() {
    const wrapper = $('.table--accounts');

    setTimeout(function() {
      if (WIN.width() <= 750) {
        wrapper.removeClass('table-list').addClass('table-grid');
      }
    }, 200);

    WIN.on('resize', function() {
      if (WIN.width() <= 750) {
        wrapper.removeClass('table-list').addClass('table-grid');
      }
      if (WIN.width() > 750) {
        wrapper.removeClass('table-grid').addClass('table-list');
      }
    });
  }
  viewSwitcherAccounts();

  // ---------------------------------------------------------------------------
  /** List to Grid view for tables: Transactions history page **/
  function viewSwitcher(e) {
    const listButton = $('[data-view-table]');
    const gridButton = $('[data-view-grid]');
    const wrapper = $('.table');
    listButton.on('click', function() {
      gridButton.removeClass('active');
      listButton.addClass('active');
      wrapper.removeClass('table-grid').addClass('table-list');
      $.cookie('TableView', 'table-view', {
          path: '/'
      });
    });
    gridButton.addClass('active');
    gridButton.on('click', function() {
      listButton.removeClass('active');
      gridButton.addClass('active');
      wrapper.removeClass('table-list').addClass('table-grid');
      $.cookie('TableView', 'grid-view', {
          path: '/'
      });
    });
    setTimeout(function() {
      if (WIN.width() <= 750) {
        wrapper.removeClass('table-list').addClass('table-grid');
      }
    }, 200);
    WIN.on('resize', function() {
      if (WIN.width() <= 750) {
        wrapper.removeClass('table-list').addClass('table-grid')
      }
      if (WIN.width() > 750 && $("[data-view-table]").hasClass('active')) {
        wrapper.removeClass('table-grid').addClass('table-list')
      }
    });
  }
  viewSwitcher();

  /** End List to Grid view for tables **/


  // ---------------------------------------------------------------------------
  /** Реализация адаптивности iframe в статьях **/
  $('.article__content iframe').each(function() {
    $(this).wrap('<div class="videowrapper">');
  });
  /** end **/


  // ---------------------------------------------------------------------------
  /** Инициализация типовых модалок **/
  $('[data-modal]').magnificPopup({
    type: 'ajax',
    removalDelay: 300,
    mainClass: 'mfp-zoom-in',
    callbacks: {
      parseAjax: function(mfpResponse) {
        mfpResponse.data = "<div class='wrapping'>" + mfpResponse.data + "</div>";
      },
      ajaxContentAdded: function() {
        this.content;
      },
      open: function() {
        $('.header').css('width', 'calc(100% - ' + scrollWidth + 'px)')
      },
      close: function() {
        $('.header').css('width', '100%')
      },
      beforeOpen: function() {
        $('body').addClass('blur');
      },
      beforeClose: function() {
        $('body').removeClass('blur');
      }
    }
  });
  /** End Инициализация модалок **/


  // ---------------------------------------------------------------------------
  /** Инициализация модального окна, которое невозможно закрыть */
  $('[data-modal--immortal]').magnificPopup({
    type: 'ajax',
    removalDelay: 300,
    mainClass: 'mfp-zoom-in',
    closeOnBgClick: false,
    showCloseBtn: false,
    enableEscapeKey: false,
    callbacks: {
      parseAjax: function(mfpResponse) {
        mfpResponse.data = "<div class='wrapping'>" + mfpResponse.data + "</div>";
      },
      ajaxContentAdded: function() {
        this.content;
      },
      open: function() {
        $('.header').css('width', 'calc(100% - ' + scrollWidth + 'px)')
      },
      close: function() {
        $('.header').css('width', '100%')
      },
      beforeOpen: function() {
        $('body').addClass('blur');
      },
      beforeClose: function() {
        $('body').removeClass('blur');
      }
    }
  });
  /** End **/


  // ---------------------------------------------------------------------------
  /**
   * Появление и скрытие поля с ответом на секретный вопрос
   * Появление\скрытие инпута в инициализации selectric'a
   **/
  let secret_question = $('.secret_question'),
    secret_answer = $('.secret_answer');
  if (!secret_question.val()) {
    secret_answer.hide();
  }
  /** End **/


  // ---------------------------------------------------------------------------
  /**
   * Инициализация select menu
   * Используется в формах, которые подгружаются на ajax
   * Для этого вынесен в функцию для использования внутри ajaxSuccess
   **/
  function selectInit() {
    $('[data-select-menu]').each(function() {
      if (!$(this).parent().hasClass('selectric-hide-select')) {
        $(this).selectric({
          maxHeight: 200,
          disableOnMobile: false,
          nativeOnMobile: false,
          onInit: function() {
            var current_option = $(this),
              current_option_value = current_option.val(),
              selectric_container = $(this).parents('.selectric-wrapper').find('.selectric');

            // проверка для вывода поля с секретным ответом
            if (current_option.hasClass('secret_question')) {
              if (current_option_value) {
                secret_answer.show();
              } else {
                secret_answer.hide();
              }
            }

            //  эмуляция placeholder'a для селектрика
            if (current_option_value) {
              selectric_container.removeClass('selectric--placeholder');
            } else {
              selectric_container.addClass('selectric--placeholder');
            }

            // проверка на количество эллементов, если 1 - то добавляем класс,
            // который скрывает всю навигацию
            if (current_option.find('option').length === 1) {
              current_option.parents('.selectric-wrapper').addClass('selectric--void');
            }
          },
          onChange: function(element) {
            var current_option = $(this),
              current_option_value = current_option.val(),
              selectric_container = $(this).parents('.selectric-wrapper').find('.selectric');

            // проверка для вывода поля с секретным ответом
            if (current_option.hasClass('secret_question')) {
              if (current_option_value) {
                secret_answer.show();
              } else {
                secret_answer.hide();
              }
            }

            //  эмуляция placeholder'a для селектрика
            if (current_option_value) {
              selectric_container.removeClass('selectric--placeholder');
            } else {
              selectric_container.addClass('selectric--placeholder');
            }
          },
        });
      }
    });
  }
  selectInit();
  /** End **/


  // ---------------------------------------------------------------------------
  /** Меню провайдеров в селектменю **/
  $('[data-select-provider-menu]').selectric({
    maxHeight: 350,
    disableOnMobile: false,
    nativeOnMobile: false,
    responsive: false,
    onInit: function() {
      if ($(this).find('option').length === 1) {
        $(this).parents('.selectric-wrapper').addClass('selectric--void');
      }
    },
    optionsItemBuilder: function(itemData) {
	    return itemData.value.length ? '<span class="provider-icon" style="background-image:url(' + itemData.value + ');"></span>' + itemData.text : itemData.text;
	  }
  }).on('change', function() {
    location.href = $(this).val();
  });
  /** End **/

  /** Инициализация select menu валют **/
  $('[data-select-currency]').selectric({
    disableOnMobile: false,
    nativeOnMobile: false,
    onInit: function() {
      if ($(this).find('option').length === 1) {
        $(this).parents('.selectric-wrapper').addClass('selectric--void');
      }
    }
  }).on('change', function() {
    location.href = $(this).val();
  });
  /** End Инициализация select menu валют **/


  // ---------------------------------------------------------------------------
  /** Fix для пагинации таблиц в кабинете игрока (решение под вопросом, костыль из-за бэкендеров) **/
  DOC.on('click', '.pager__item a', function(event) {
    $('html, body').animate({
      scrollTop: $('#table-top').offset().top
    }, 500);
  });
  /** End Fix для пагинации таблиц в кабинете игрока **/


  // ---------------------------------------------------------------------------
  /** Fix Hover on mobile **/
  fixHover('.games__item', '.games__item__overlay', 'games__item__overlay--active');

  function fixHover(sSelestor, sHover, sActiveClass) {
    $(sSelestor).hover(
      function() {
        $(this)
          .find(sHover)
          .addClass(sActiveClass);
      },
      function() {
        $(this)
          .find(sHover)
          .removeClass(sActiveClass);
      }
    );
  }
  /** End Fix Hover on mobile **/


  // ---------------------------------------------------------------------------
  /**
   * Инициализация поля выбора даты
   * Используется в формах, которые подгружаются на ajax
   * Для этого вынесен в функцию для использования внутри ajaxSuccess
   **/
  function dateInit() {
    let input_date = $('[data-datepicker]');
    if (input_date.length > 0 && input_date.is(':visible')) {
      if (!$('.datepickers-container').length) {
        let date = (new Date()).getFullYear();
        let maxdate = new Date();
        maxdate.setYear(date - 18);

        input_date.datepicker({
          maxDate: maxdate,
          autoClose: true,
          dateFormat: 'yyyy-mm-dd',
          language: 'en'
        });
      }
    }
  }

  dateInit();
  /** End **/

  /** Avatar load в профиле Игрока **/
  var readURL = function(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
        $('.profile-pic').attr('src', e.target.result);
      };
      reader.readAsDataURL(input.files[0]);
    }
  };
  $('#avatar-form').submit(function() {
    readURL($('#avatar-input'));
  });

  $("[data-avatar-submit]").on('click', function() {
    $("[data-avatar-upload]").click();
  });
  /** End Avatar load в профиле Игрока **/

  // ---------------------------------------------------------------------------
  /** Document load в кабинете Игрока **/
  $(".upload-button").on('click', function() {
    $(".file-upload").click();
  });
  /** End Document load в кабинете Игрока **/

  /** Tabs для форм на странице профиля игрока **/
  $('ul.tabs').on('click', 'li:not(.active)', function() {
    $(this).addClass('active').siblings().removeClass('active').closest('section.page-profile__content').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    lazyLoad();
  });
  /** End Tabs история транзакций **/


  /** Определяем ширину скроллбара в текущем браузере !!! определить необходимость для данного проекта !!!????? **/
  var div = document.createElement('div');

  div.style.overflowY = 'scroll';
  div.style.width = '50px';
  div.style.height = '50px';
  div.style.visibility = 'hidden';

  document.body.appendChild(div);
  var scrollWidth = div.offsetWidth - div.clientWidth;
  document.body.removeChild(div);
  /** End Определяем ширину скроллбара в текущем браузере **/


  /** Событие клика на элементе faq. Показывает\скрывает ответ на вопрос */
  DOC.on('click', '[data-faq-question]', function() {
    var item = $(this).parents('.faq__item');
    item.find('.faq__answer').slideToggle();
    item.toggleClass('faq--open');
  });
  /** End **/

  /** Иниализация отложенной подгрузки изображений + замена битого изображения логотипом проекта */
  function lazyLoad() {
    $('[data-lazy] img[data-src]').Lazy({
      scrollDirection: 'vertical',
      effect: "fadeIn",
      effectTime: 1000,
      onError: function(element) {
        element.attr("src", "../img/logos/logo.svg").addClass('no-photo');
      }
    });
  }
  lazyLoad();
  /** End **/


  /** Событие смены видимости пароля в инпуте */
  var passwordToggler = ('[data-password-toggler]');
  DOC.on('click', passwordToggler, function() {
    var btn = $(this),
      input = btn.siblings('input');
    btn.toggleClass('icon-view');
    btn.toggleClass('icon-hide');
    if (input.attr('type') == 'text') {
      input.attr('type', 'password');
    } else {
      input.attr('type', 'text');
    }
  });
  /** End **/

  /** Инициализация плагина обратного отсчета */
  $('[data-time]').each(function() {
    $(this).countdown($(this).attr('data-time'), function(event) {
      $(this).html(event.strftime('' +
        '<div class="counter__block">' +
        '<span class="counter__value">%D</span>' +
        '<span class="counter__desc">' +
        $(this).attr('data-days') +
        '</span>' +
        '</div>' +
        '<dl>:</dl>' +
        '<div class="counter__block">' +
        '<span class="counter__value">%H</span>' +
        '<span class="counter__desc">' +
        $(this).attr('data-hours') +
        '</span>' +
        '</div>' +
        '<dl>:</dl>' +
        '<div class="counter__block">' +
        '<span class="counter__value">%M</span>' +
        '<span class="counter__desc">' +
        $(this).attr('data-min') +
        '</span>' +
        '</div>' +
        '<dl>:</dl>' +
        '<div class="counter__block">' +
        '<span class="counter__value">%S</span>' +
        '<span class="counter__desc">' +
        $(this).attr('data-sec') +
        '</span>' +
        '</div>'
      ));
    });
  });
  /** End **/


  /** Tabs для формы регистрации **/
  $('ul.registration__tabs--top').on('click', 'li:not(.active)', function() {
    $(this).addClass('active').siblings().removeClass('active').closest('div.registration__tabs').find('div.registration__tabs--content').removeClass('active').eq($(this).index()).addClass('active');
    // if ($('[data-phone-tab]').hasClass('active')) {
    //     phoneInit();
    // }
  });
  /** End **/

  //-- Инициализация поля выбора телефона
  function phoneinit() {
    if ($('[data-phone-number]').length) {
      var input = document.querySelector("[data-phone-number]");
      //-- fix проблемы с огромным паддингом
      $(input).attr('style', 'padding-left: 100px;');

      if (!$('.iti').length) {
        window.intlTelInput(input, {
          initialCountry: "auto",
          autoHideDialCode: true,
          nationalMode: false,
          separateDialCode: true,
          hiddenInput: "full_phone",
          numberType: "MOBILE",
          preferredCountries: ["ru", "ua", "by", "kz"],
          geoIpLookup: function(callback) {
            $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
              var countryCode = (resp && resp.country) ? resp.country : "";
              callback(countryCode);
            });
          },
          // utilsScript: "/front/dist/js/utils.js" // just for formatting/placeholders etc
        });

        //-- обертка для телефонных номеров
        $('.iti__country-list').each(function() {
          $(this).wrap('<div class="iti__country-list--wrapper">');
        });

        // переносим список стран на уровень выше
        $('.iti').append($('.iti__country-list--wrapper'));
      }
    }
  }

  phoneinit();
  //-- End Инициализация поля выбора телефона

  /** Tabs с дополнительной инофрмацией на странице отдельной игры **/
  $('[data-game-tabs]').on('click', 'li:not(.active)', function() {
    $(this).addClass('active').siblings().removeClass('active').closest('div.game__box--right')
      .find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    if ($('[data-tabs-tournament]').hasClass('active')) {
      $('[data-topinfo]').addClass('open');
    } else {
      $('[data-topinfo]').removeClass('open');
    }
  });
  /** End **/

  /**
   * Условие проверки входа через IE
   * И вывод соответствующего сообщения об устаревшем браузере
   **/
  if (!HTML.hasClass('ie')) {
    $('.ieOff').remove();
  }
  /** End **/

  /**
   * Детектирование включенного AdBlock'a у пользователя
   * Если он активирован - выводим сообщение
   * При закрытии этого сообщение результат записываем в sessionStorage
   * и в следующий раз уже не отображаем сообщение
   **/
  //sessionStorage.clear();  // очищаем sessionStorage и показываем уведомление при каждой перезагрузке

  let alert_container = $('.alert');

  function adBlockDetected() {
    let alert_status = sessionStorage.getItem('alert');
    if (alert_status !== '0') {
      alert_container.show();
    }
  }
  if (typeof fuckAdBlock === 'undefined') {
    adBlockDetected();
  } else {
    fuckAdBlock.onDetected(adBlockDetected);
  }
  DOC.on('click', '[data-alert-close]', function() {
    alert_container.hide();
    sessionStorage.setItem('alert', '0');
  });

  /** Language select **/
  DOC.on('click', '.lang-select', function() {
    $(this).toggleClass('open');
  });
  $(".lang-select .lang-select__item").click(function() {
    $(this).siblings(".lang-select__item").removeClass('active');
    $(this).toggleClass('active')
  });

  /** Закрытие списка языков при клике вне его **/
  DOC.on('click', function(e) {
    if (!$(e.target).closest(".lang").length) {
      $('.lang-select').removeClass('open');
    }
    e.stopPropagation();
  });
  /** End **/

  /** Tabs + cookies / Profile transaction history **/
  function historySwitcher(e) {
    const historyDeposit = $('[data-history-deposit]');
    const historyDepositContent = $('[data-history-deposit-content]');
    const historywithdraw = $('[data-history-withdraw]');
    const historywithdrawContent = $('[data-history-withdraw-content]');
    historywithdraw.on('click', function() {
      historyDeposit.removeClass('active');
      historyDepositContent.removeClass('active');
      historywithdraw.addClass('active');
      historywithdrawContent.addClass('active');
      $.cookie('HistorySwitcher', 'history-withdraw', {
        path: '/'
      });
    });
    historyDeposit.on('click', function() {
      historywithdraw.removeClass('active');
      historywithdrawContent.removeClass('active');
      historyDeposit.addClass('active');
      historyDepositContent.addClass('active');
      $.cookie('HistorySwitcher', 'history-deposit', {
        path: '/'
      });
    });
  }
  historySwitcher();
  //-- End Tabs история транзакций

  // ADD cookies history transaction switcher
  function setHistoryView() {
    if ($.cookie('HistorySwitcher') == null) {
      $.cookie('HistorySwitcher', 'history-withdraw', {
        path: '/'
      });
    }
    if ($.cookie('HistorySwitcher') == 'history-withdraw') {
      $('[data-history-withdraw]').click();
    }

    if ($.cookie('HistorySwitcher') == 'history-deposit') {
      $('[data-history-deposit]').click();
    }
  }
  setHistoryView();
  /** END tabs + cookies / Profile transaction history **/

  /**
   * Инициализация модального окна, inline type
   */
  $('[data-modal-inline]').magnificPopup({
    type: 'inline',
    midClick: true
  });

  //-- Инициализация поиска ----------------------------------------------------
  function searchHeader() {
    let searchButton = $('[data-header-search]');
    searchButton.on('click', function(e) {
      e.preventDefault();
      $.magnificPopup.close();
      let that = $(e.target);
      let href = e.target;
      if (!that.hasClass('active')) {
        that.addClass('active');
        $.magnificPopup.open({
          mainClass: 'mfp-move-from-top',
          modal: false,
          showCloseBtn: false,
          items: {
            src: href
          },
          type: 'ajax',
          callbacks: {
            parseAjax: function(mfpResponse) {
              mfpResponse.data = "<div class='search__wrapping'>" + mfpResponse.data + "</div>";
            },
            ajaxContentAdded: function() {
              this.content;
            },
            beforeOpen: function() {
              $('.header').css('width', 'calc(100% - ' + scrollWidth + 'px)');
              $('body').addClass('header-search');
            },
            beforeClose: function() {
              $('.header').css('width', '100%');
              $('body').removeClass('header-search');
            },
            close: function() {
              that.removeClass('active');
            },
          }
        }, 0);
      } else {
        that.removeClass('active');
      }
    })
  }

  searchHeader();

  WIN.on('resize', function() {
    $('[data-header-search].active').each(function() {
      $('[data-header-search].active').removeClass('active');
      $.magnificPopup.close();
    });
  });

  function searchGames() {
    let searchButton = $('[data-games-search]');
    searchButton.on('click', function(e) {
      e.preventDefault();
      $.magnificPopup.close();
      let that = $(e.target);
      let href = e.target;
      if (!that.hasClass('active')) {
        that.addClass('active');
        $.magnificPopup.open({
          mainClass: 'mfp-move-from-top',
          modal: false,
          showCloseBtn: false,
          items: {
            src: href
          },
          type: 'ajax',
          callbacks: {
            parseAjax: function(mfpResponse) {
              mfpResponse.data = "<div class='search__wrapping'>" + mfpResponse.data + "</div>";
            },
            ajaxContentAdded: function() {
              this.content;
            },
            beforeOpen: function() {
              $('.header').css('width', 'calc(100% - ' + scrollWidth + 'px)');
              $('body').addClass('header-search');
            },
            beforeClose: function() {
              $('.header').css('width', '100%');
              $('body').removeClass('header-search');
            },
            close: function() {
              that.removeClass('active');
            },
          }
        }, 0);
      } else {
        that.removeClass('active');
      }
    })
  }

  searchGames();

  WIN.on('resize', function() {
    $('[data-games-search].active').each(function() {
      $('[data-games-search].active').removeClass('active');
      $.magnificPopup.close();
    });
  });
  //-- End Инициализация поиска ------------------------------------------------

  // ----- HEADER BURGER menu stuff --------------------------------------------
  $('[data-header-burger]').click(function() {
    $(this).toggleClass('active');
    $(this).next('.header__burger-menu').slideToggle(200);
  });

  /** Закрытие burger-menu при клике вне его **/
  DOC.on('click', function(e) {
    if (!$(e.target).closest(".header__burger").length) {
      $('.header__burger-icon').removeClass('active');
      $('.header__burger-menu').slideUp(200);
    }
    e.stopPropagation();
  });
  // ----- end HEADER BURGER menu stuff ----------------------------------------

  // ----- HEADER PROFILE menu stuff -------------------------------------------
  $('[data-header-profile]').click(function() {
    $(this).toggleClass("active");
  });

  /** Закрытие header-profile-menu при клике вне его **/
  DOC.on('click', function(e) {
    if (!$(e.target).closest("[data-header-profile]").length) {
      $('[data-header-profile]').removeClass('active');
    }
    e.stopPropagation();
  });


  /** Событие срабатывает в случае успешного выполнения ajax запроса **/
  $(document).on('ajaxSuccess', function() {

    selectInit();
    lazyLoad();
    dateInit();
    /** Слайдер выбора бонуса на депозит в модалке **/
    chooseBonus();
  });

  /** Раскрытие фрейма с игрой на весь экран **/
  $('.game__panel-fullscreen').click(function() {
    $('.game__iframe iframe, .game__iframe img').fullscreen();
  });

  // ----- Game page: close game panel  ---------------------------------------
  $('[data-close-game-panel]').click(function() {
    $(this).closest('.game').toggleClass('hide-game-panel');
  });
  // ----- end Game page: close game panel  ------------------------------------
});
