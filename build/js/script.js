'use strict';

// Mobile menu

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var navLink = document.querySelectorAll('.main-nav__item');

navMain.classList.remove('main-nav--nojs');

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

navLink.forEach(function (link) {
  link.addEventListener('click', function () {
    if (document.body.classList.contains('no-scroll')) {
      document.body.classList.remove('no-scroll');
    }
  });
});

// Validation form

var userPhone = document.querySelector('#user-tel');
var userName = document.querySelector('#user-name');
var buttonForm = document.querySelector('.user-form__button');

var im = new Inputmask('+7 (999) 999-99-99');
im.mask(userPhone);

buttonForm.addEventListener('click', function (evt) {
  if (userName.value.length === 0) {
    evt.preventDefault();
    userName.setCustomValidity('Введите ваше имя');
  } else {
    userName.setCustomValidity('');
  }

  if (userPhone.value.length === 0) {
    evt.preventDefault();
    userPhone.setCustomValidity('Введите номер телефона');
  } else {
    userPhone.setCustomValidity('');
  }

  userName.reportValidity();
  userPhone.reportValidity();
  localStorage.setItem('name', userName.value);
  localStorage.setItem('phone', userPhone.value);
});
