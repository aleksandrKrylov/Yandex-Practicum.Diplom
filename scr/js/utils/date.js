const monthsNewsCards = 'Января,Февраля,Марта,Апреля,Майя,Июнья,Июлья,Августа,Сентябрья,Октябрья,Ноябрья,Декабрья'.split(',');
const monthsApi = '01,02,03,04,05,06,07,08,09,10,11,12'.split(',');
const monthNewsCards = 'Январ,Феврал,Март,Апрел,Май,Июнь,Июль,Август,Сентябрь,Октябрь,Ноябрь,Декабрь'.split(',');
const daysWeeks = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

function dateDisplay (info) { // получить текущую дату. 23 Августа, 2020. (new Date())
  const dateCopy = new Date(info);
  return `${dateCopy.getDate()} ${monthsNewsCards[dateCopy.getMonth()]}, ${dateCopy.getFullYear()}`
}

function getDateApi(date, days) { // получить -7 д.н н.з.  2020-08-16. (new Date(), 7)
  let dateCopy = new Date(date);
  dateCopy.setDate(date.getDate() - days);
  return `${dateCopy.getFullYear()}-${monthsApi[dateCopy.getMonth()]}-${dateCopy.getDate()}`;
}

function dateDisplayMonth (info) { // получить текущий мксяц
  const dateCopy = new Date(info);
  return `${monthNewsCards[dateCopy.getMonth()]}`
}
 
function getDatedaysWeeks(date, days) { // получить тикущию дату. 23, вс
  const dateCopy = new Date(date);
  dateCopy.setDate(date.getDate() - days);
  return `${dateCopy.getDate()}, ${daysWeeks[dateCopy.getDay()]}`;
}

export {dateDisplay, getDateApi, dateDisplayMonth, getDatedaysWeeks};
