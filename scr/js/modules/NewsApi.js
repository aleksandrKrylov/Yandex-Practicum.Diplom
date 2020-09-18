export class NewsApi {
  constructor(apiData, getDateApi) {
    this.token = apiData.authorization;
    this._url = apiData.url;
    this.getDateApi = getDateApi;
  }

  getNews(keyWord) {
    return fetch(`${this._url}nomoreparties.co/news/v2/everything?q=${keyWord}&apiKey=${this.token}&from=${this.getDateApi(new Date(), 7)}&to=${this.getDateApi(new Date(), 0)}&language=ru&pageSize=100`)
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
      return res.json();
    })
  }
}
