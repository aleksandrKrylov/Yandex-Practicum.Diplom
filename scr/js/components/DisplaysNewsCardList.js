export class DisplaysNewsCardList {
  constructor(listClass) {
    this.listClass = listClass;
    this.classHidden = `${'results_hidden'}`;
  }
  close(){
    this.listClass.classList.add(this.classHidden);
  }
  open(){
    this.listClass.classList.remove(this.classHidden);
  }
}
