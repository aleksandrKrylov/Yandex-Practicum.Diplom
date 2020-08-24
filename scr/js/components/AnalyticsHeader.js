export class AnalyticsHeader {
  constructor(getData, textHeader, searchKeyWord) {
    this.getData = getData;
    this.textHeader = textHeader;
    this.title = this.textHeader.title;
    this.statisticsWeek = this.textHeader.statisticsWeek;
    this.mentionsTitles = this.textHeader.mentionsTitles
    this.searchKeyWord = searchKeyWord;
  }

  renderHeader() {
    this.title.textContent = this.getData('keyWord');
    this.statisticsWeek.textContent = this.getData('numberNews');
    this._quantity = 0
    this.getData('news').forEach((element) => {
      if (element.title.match(this.searchKeyWord) !== null) {
        this._quantity++;
      }
      this.mentionsTitles.textContent = this._quantity;
    });
  }
}
