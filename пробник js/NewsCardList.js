export class NewsCardList {
  constructor(container, createNewsCard) {
    this.container = container;
    this.createNewsCard = createNewsCard;
  }

  render() {
    this.arrayNews = JSON.parse(localStorage.getItem('news'))
     for (let i = 0; i < 3; i++) {
      this.container.append(this.createNewsCard(this.arrayNews[i]));
    }
  }
}
