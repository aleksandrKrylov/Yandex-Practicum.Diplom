export class NewsApi {
  constructor(apiData) {
    this.token = apiData.headrs.authorization;
    this.urlId = apiData.url;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  };

  getNewsCards() {
   /* from=2020-08-14  to=2020-08-14  ДОБАВИТЬ ПОЗЖЕ ДАТУ */
    return fetch(`${this.urlId}/news/v2/everything?q=${localStorage.getItem('keyWord')}&apiKey=${this.token}&language=ru&pageSize=100`)
    .then((res) => {
      return this._getResponseData(res);
    })
  }
}
