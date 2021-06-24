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


'use strict';

var userPhone = document.querySelector('#user-tel');
var userName = document.querySelector('#user-name');
var buttonForm = document.querySelector('.user-form__button');

var im = new Inputmask('+7 (999) 999-99-99');
if (userPhone) {
  im.mask(userPhone);
}

if (buttonForm) {
  buttonForm.addEventListener('click', function (evt) {
    if (userName) {
      if (userName.value.length === 0) {
        evt.preventDefault();
        userName.setCustomValidity('Введите ваше имя');
      } else {
        userName.setCustomValidity('');
      }
      userName.reportValidity();
      localStorage.setItem('name', userName.value);
    }

    if (userPhone) {
      if (userPhone.value.length === 0) {
        evt.preventDefault();
        userPhone.setCustomValidity('Введите номер телефона');
      } else {
        userPhone.setCustomValidity('');
      }
      userPhone.reportValidity();
      localStorage.setItem('phone', userPhone.value);
    }
  });
}
