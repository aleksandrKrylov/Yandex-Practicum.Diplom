export class CommitCardList {
  constructor(container, createCard) {
    this.container = container;
    this.createCard = createCard;
  }

  render(cards) {
    cards.forEach((data) => {
      this.container.append(this.createCard(data));
    });
  }
}
