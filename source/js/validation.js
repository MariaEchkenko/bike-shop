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
