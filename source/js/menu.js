'use strict';

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var navLink = document.querySelectorAll('.main-nav__item');

if (navMain) {
  navMain.classList.remove('main-nav--nojs');
}

if (navToggle) {
  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
      document.body.classList.add('no-scroll');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      document.body.classList.remove('no-scroll');
    }
  });
}

if (navLink) {
  navLink.forEach(function (link) {
    link.addEventListener('click', function () {
      if (document.body.classList.contains('no-scroll')) {
        document.body.classList.remove('no-scroll');
      }
    });
  });
}
