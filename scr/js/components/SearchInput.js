export class SearchInput {
  constructor(form, setData, getData) {
    this.form = form;
    this.setData = setData;
    this.getData = getData;
    this._input = this.form.querySelector(".search__input");
    this._button = this.form.querySelector(".search__button");
  }

  checkInputValidity(element) {
    // Текст для валидации
    if (element.validity.valueMissing) {
      element.setCustomValidity("Нужно ввести ключевое слово");
    } else if (element.validity.tooShort) {
      element.setCustomValidity("Должно быть от 2 символов");
    } else {
      element.setCustomValidity("");
    }
    this.errorElement = this.form.querySelector("#error-title");
    this.errorElement.textContent = element.validationMessage;
  }

  setSubmitButtonState() {
    // Валидация кнопки
    if (!this.form.checkValidity()) {
      this._button.setAttribute("disabled", true);
      this._button.classList.remove("search__button_valid");
    } else {
      this._button.removeAttribute("disabled");
      this._button.classList.add("search__button_valid");
    }
  }

  validationInput() {
    this.form.addEventListener("input", (event) => {
      this.checkInputValidity(event.target);
      this.setSubmitButtonState(this._button);
    });
  }

  getFieldValue() {
    // Получаем значения поля
    this._button.addEventListener("click", (event) => {
      event.preventDefault();
      this.setData('keyWord',  this._input.value)
    });
    this._input.value = this.getData('keyWord');
  }
}
