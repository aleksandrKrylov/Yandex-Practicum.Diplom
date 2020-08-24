export class GithubApi {
  constructor(url) {
    this._url = url;
  }

  getCommits() {
    return fetch(`${this._url}api.github.com/repos/aleksandrKrylov/Yandex-Practicum.Diplom/commits?author=a.v.krylovv@yandex.ru&per_page=20`)
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
      return res.json();
    })
  }
}
