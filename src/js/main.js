$(function () {

  $('.hero-banner__slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    arrows: false,
    fade: true,
  });

  // modal
  $('.feedback-btn').on('click', function (evt) {
    evt.preventDefault();
    $('.feedback').addClass('modal--active');
  });
  
  $('.request-btn').on('click', function (evt) {
    evt.preventDefault();
    $('.request').addClass('modal--active');
  });
  
  $('.modal__btn-close').on('click', function (evt) {
    evt.preventDefault();
    $('.modal').removeClass('modal--active');
  });
  
  $('.modal').on('click', function (evt) {
    if (!($(evt.target).parents('.modal').length)) {
      $('.modal').removeClass('modal--active');
    }
  });
  $(document).on('keydown', function(e) { 
    if (e.code == 'Escape') { 
      $('.modal').removeClass('modal--active');
    }
  });

  // menu-burger
  $('.menu-burger').on('click', function () {
    $(this).toggleClass('menu-burger--active');
    $('.header__nav-list').toggleClass('header__nav-list--active');
    $('html').toggleClass('hidden');
  });

  // price-tab
  $('.price__tab-link').on('click', function (evt) {
    evt.preventDefault();
    $('.price__tab-link').removeClass('price__tab-link--active');
    $('.price-item').removeClass('price-item--active');
    $(this).addClass('price__tab-link--active');
    $($(this).attr('href')).addClass('price-item--active');
  });

});




// is mobile?
let isMobile = {
  Android: function () { return navigator.userAgent.match(/Android/i); },
  BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
  iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
  Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
  Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
  any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};

let body = document.querySelector('body');
if (isMobile.any()) {
  body.classList.add('touch');
  let arrow = document.querySelectorAll('.arrow');
  for (let i = 0; i < arrow.length; i++) {
    let thisLink = arrow[i].previousElementSibling;
    let thisArrow = arrow[i];
    let subMenu = arrow[i].nextElementSibling;

    thisLink.classList.add('parent');
    arrow[i].addEventListener('click', function () {
      subMenu.classList.toggle('submenu__list--open');
      thisArrow.classList.toggle('arrow--active');
    });

  }
} else {
  body.classList.add('mouse');
}

