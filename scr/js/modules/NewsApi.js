export class NewsApi {
  constructor(apiData) {
    this.token = apiData.authorization;
    this.url = apiData.url;
  }

  getNewsCards(keyWord) {
   /* from=2020-08-14  to=2020-08-14  ДОБАВИТЬ ПОЗЖЕ ДАТУ */
    return fetch(`${this.url}/news/v2/everything?q=${keyWord}&apiKey=${this.token}&language=ru&pageSize=100`)
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
      return res.json();
    })
  }
}
