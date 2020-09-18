export class AnalyticsCardList {
  constructor(itemStatistics, amountInterest, itemDate, getDatedaysWeeks) {
    this.itemStatistics = itemStatistics;
    this.amountInterest = amountInterest;
    this.itemDate = itemDate;
    this.getDatedaysWeeks = getDatedaysWeeks;
  }

  renderStatistics() {
    for (this._i = 0; this._i < 7; this._i++) {
      this.itemStatistics[this._i].textContent = this.amountInterest()[this._i];
      this.itemStatistics[this._i].style.width =
        this.amountInterest()[this._i] + "%";
    }
  }

  renderDate() {
    this._i = 0;
    this.itemDate.forEach((element) => {
      element.textContent = this.getDatedaysWeeks(new Date(), this._i);
      this._i++;
    });
  }
}
