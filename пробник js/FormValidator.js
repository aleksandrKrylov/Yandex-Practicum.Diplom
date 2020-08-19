/* валидация поля,
  надо исправить, при нажатию на button подгружаеться 'поля не заполнено' */
export class FormValidator {
  constructor(form) {
    this.form = form;
    this.submit = this.form.querySelector('.search__button');
  }

  checkInputValidity(element) { // Текст для валидации
    if (element.validity.valueMissing) {
      element.setCustomValidity('Нужно ввести ключевое слово');
    }
    else if (element.validity.tooShort) {
      element.setCustomValidity('Должно быть от 2 символов');
    }
    else {
      element.setCustomValidity('');
    }
    this.errorElement = this.form.querySelector('#error-title');
    this.errorElement.textContent = element.validationMessage;
  };

  setSubmitButtonState() { // Валидация кнопки
    if (!this.form.checkValidity()) {
      this.submit.setAttribute('disabled', true);
      this.submit.classList.remove('search__button_valid');
    } else {
      this.submit.removeAttribute('disabled');
      this.submit.classList.add('search__button_valid');
    }
  };

  setEventListeners () {
    this.form.addEventListener('input', (event) => {
      this.checkInputValidity(event.target);
      this.setSubmitButtonState(this.submit);
    });
  };

}
