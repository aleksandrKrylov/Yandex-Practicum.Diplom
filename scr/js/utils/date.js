const monthsNewsCards = 'Января,Февраля,Марта,Апреля,Майя,Июнья,Июлья,Августа,Сентябрья,Октябрья,Ноябрья,Декабрья'.split(',');
const monthsApi = '01,02,03,04,05,06,07,08,09,10,11,12'.split(',');

function getDateNewsCards(info) {
  let dateCopy = new Date(info);
  return `${dateCopy.getDate()} ${monthsNewsCards[dateCopy.getMonth()]}, ${dateCopy.getFullYear()}`
}

function getDateApi(days) {
  let dateCopy = new Date();
  return `${dateCopy.getFullYear()}-${monthsApi[dateCopy.getMonth()]}-${dateCopy.getDate() - days}`;
}

export {getDateNewsCards, getDateApi};
