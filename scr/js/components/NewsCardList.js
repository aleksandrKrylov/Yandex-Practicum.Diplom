export class NewsCardList {
  constructor(container, createNewsCard, buttonShowMore, numberNewsCards, buttonSearch) {
    this.container = container;
    this.createNewsCard = createNewsCard;
    this.buttonShowMore = buttonShowMore;
    this.numberNewsCards = numberNewsCards;
    this.buttonSearch = buttonSearch;
    this._indexlist = 0;
  }

  renderList(arrayNews) {
    if (!arrayNews.length == 0) {
    this._arrayNews = arrayNews;
    this._splitArray();
    }
  }

  _counter() {
    return this._arrayNews.slice(this._indexlist * this.numberNewsCards, (this._indexlist + 1) * this.numberNewsCards);
  }

  _splitArray() {
    this._counter().forEach((data) => {
        this.container.append(this.createNewsCard(data));
      });
  }

  addListener() {
    this.buttonShowMore.addEventListener("click", () => {
      this._indexlist ++;
      this._splitArray();
      if (this._arrayNews.length == this.container.childNodes.length) {
        this.buttonShowMore.classList.toggle('results__button_hidden');
      }
    });
    this.buttonSearch.addEventListener("click", () => {
      this._indexlist = 0
      if (this.buttonShowMore.classList.contains('results__button_hidden')) {
        this.buttonShowMore.classList.toggle('results__button_hidden');
      }
    });
  };
}
