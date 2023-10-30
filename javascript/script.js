function startTime() {
  var today = new Date();
  var hr = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();

  var ap = hr < 12 ? "AM" : "PM";
  hr = hr == 0 ? 12 : hr;
  hr = hr > 12 ? hr - 12 : hr;

  hr = checkTime(hr);
  min = checkTime(min);
  sec = checkTime(sec);

  document.getElementById("clock").innerHTML =
    hr + ":" + min + ":" + sec + " " + ap;
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var curWeekday = days[today.getDay()];
  var curDay = today.getDate();
  var curMonth = months[today.getMonth()];
  var curYear = today.getFullYear();
  var date = curWeekday + ", " + curMonth + " " + curDay + " " + curYear;
  document.getElementById("date").innerHTML = date;
  var time = setTimeout(function () {
    startTime();
  }, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

startTime();
