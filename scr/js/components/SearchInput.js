export class SearchInput {
  constructor(form, setData, getData) {
    this.form = form;
    this.setData = setData;
    this.getData = getData;
    this.input = this.form.querySelector(".search__input");
    this.button = this.form.querySelector(".search__button");
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
      this.button.setAttribute("disabled", true);
      this.button.classList.remove("search__button_valid");
    } else {
      this.button.removeAttribute("disabled");
      this.button.classList.add("search__button_valid");
    }
  }

  validationInput() {
    this.form.addEventListener("input", (event) => {
      this.checkInputValidity(event.target);
      this.setSubmitButtonState(this.button);
    });
  }

  getFieldValue() {
    // Получаем значения поля
    this.button.addEventListener("click", (event) => {
      event.preventDefault();
      this.setData('keyWord',  this.input.value)
    });
    this.input.value = this.getData('keyWord');
  }
}
