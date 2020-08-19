export class NewsCardList {
  constructor(container, createNewsCard, buttonShowMore, numberNewsCard, containerList) {
    this.container = container;
    this.createNewsCard = createNewsCard;
    this.buttonShowMore = buttonShowMore;
    this.containerList = containerList;
    this.numberNewsCard = numberNewsCard
    this._indexlist = 0;
  }

  renderList(arrayNews) {
    if (!arrayNews.length == 0) {
    this._arrayNews = arrayNews;
    this._splitArray();
    }
  }

  _counter() {
    return this._arrayNews.slice(this._indexlist * this.numberNewsCard, (this._indexlist + 1) * this.numberNewsCard);
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
    });
  };
}
