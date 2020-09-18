export class DisplaysNotFound {
  constructor(notFoundClass) {
    this.notFoundClass = notFoundClass;
    this.classHidden = `${'not-found_hidden'}`;
  }
  close(){
    this.notFoundClass.classList.add(this.classHidden);
  }
  open(){
    this.notFoundClass.classList.remove(this.classHidden);
  }
}
