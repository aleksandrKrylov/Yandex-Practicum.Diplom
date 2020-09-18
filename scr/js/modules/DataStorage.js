export class DataStorage {
  constructor() {

  }

  setData(key, data) {
    //JSON.stringify(данные)
   return localStorage.setItem(key, JSON.stringify(data))
  }

  getData(key) {
    //JSON.parse(localStorage.getItem('ключ'))
   return JSON.parse(localStorage.getItem(key))
  }
}
//
//
