export class NewsApi {
  constructor(apiData, getDateApi) {
    this.token = apiData.authorization;
    this.url = apiData.url;
    this.getDateApi = getDateApi;
  }

  getNewsCards(keyWord) {
    return fetch(`${this.url}/news/v2/everything?q=${keyWord}&apiKey=${this.token}&from=${this.getDateApi(7)}&to=${this.getDateApi(0)}&language=ru&pageSize=100`)
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
      return res.json();
    })
  }
}
