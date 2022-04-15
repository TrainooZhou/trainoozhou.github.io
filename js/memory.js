function moreDays() {
  const days = [
    "2021-07-31 初识",
    "2021-10-03 ▇▇",
    "2022-01-29 在一起",
    "2022-02-03 ▇▇",
    "2022-04-05 ▇▇",
    ];
  var html = "";
  days.forEach((day, index) => {
    html += "<li>" + day + "</li>";
  })
  document.getElementsByClassName('moreDays')[0].innerHTML = html;
}
moreDays();

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

var relationship = '2021-07-31'
document.getElementsByClassName('c1')[0].innerText = Since(relationship, false);
document.getElementsByClassName('b3')[0].innerText = 'Since ' + relationship;

var relationship1 = '2022-01-29'
document.getElementsByClassName('c1')[1].innerText = Since(relationship1, false);
document.getElementsByClassName('b3')[1].innerText = 'Since ' + relationship1;

var relationship2 = '2022-07-20'
document.getElementsByClassName('c1')[2].innerText = Since(relationship2, true);
document.getElementsByClassName('b3')[2].innerText = 'The day is ' + relationship2;