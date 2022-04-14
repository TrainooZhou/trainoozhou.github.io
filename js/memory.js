function Since(date, desc) {
  let miliSecond,totalDays;
  let tmpDate = Date.parse(date);
  let nowDate = new Date();
  miliSecond = Math.abs(nowDate - tmpDate);
  if (desc) {
	totalDays = Math.floor(miliSecond / (1000 * 3600 * 24) + 1);
  } else {
	totalDays = Math.floor(miliSecond / (1000 * 3600 * 24));
  }
  if (totalDays == 0) {
	return "今"
  }
  return totalDays;
}

var relationship = '2022-01-29'
document.getElementsByClassName('c1')[0].innerText = Since(relationship, false);
document.getElementsByClassName('b3')[0].innerText = 'Since ' + relationship;

var relationship2 = '2022-07-20'
document.getElementsByClassName('c1')[1].innerText = Since(relationship2, true);
document.getElementsByClassName('b3')[1].innerText = 'The day is ' + relationship2;