export class DisplaysPreloader {
  constructor(preloaderClass) {
    this.preloaderClass = preloaderClass;
    this.classHidden = `${'preloader_hidden'}`;
  }
  close(){
    this.preloaderClass.classList.add(this.classHidden);
  }
  open(){
    this.preloaderClass.classList.remove(this.classHidden);
  }
}
