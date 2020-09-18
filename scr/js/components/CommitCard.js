export class CommitCard {
  constructor(data, dateDisplay) {
    this.data = data;
    this.dateDisplay= dateDisplay;
  }

  create() {
    const template = `<div class="swiper-slide">
    <a class="commit-history__card-link" href=${"https://github.com/aleksandrKrylov/Yandex-Practicum.Diplom/commits/master"} target="_blank"}>
      <p class="commit-history__date">${this.dateDisplay(this.data.commit.committer.date)}</p>
      <div class="commit-history__blok">
        <div class="commit-history__image" style="background-image: url(${this.data.author.avatar_url})"></div>
        <div class="commit-history__data">
          <h3 class="commit-history__name">${this.data.commit.committer.name}</h3>
          <p class="commit-history__email">${this.data.commit.committer.email}</p>
        </div>
      </div>
      <p class="commit-history__text">${this.data.commit.message}</p>
    </a>
  </div>` ;

    const element = document.createElement("div");
    element.insertAdjacentHTML("beforeend", template.trim());
    return element.firstChild;
  };
};
