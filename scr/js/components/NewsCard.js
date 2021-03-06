export class NewsCard {
  constructor(data, dateDisplay) {
    this.data = data;
    this.dateDisplay= dateDisplay;
  }

  create() {
    const template = `<div class="results__card">
    <a class="results__link-card"
      href="${this.data.url}"target="_blank">
      <div class="results__image" style="background-image: url(${this.data.urlToImage})"></div>
      <div class="results__description">
        <p class="results__date">${this.dateDisplay(this.data.publishedAt.split('T').shift())}</p>
        <h3 class="results__title">${this.data.title}</h3>
        <p class="results__subtitle">${this.data.description}</p>
        <p class="results__source">${this.data.source.name}</p>
      </div>
    </a>
  </div>`;

    const element = document.createElement("div");
    element.insertAdjacentHTML("beforeend", template.trim());
    return element.firstChild;
  };
};
