function Watch() {
  let d = new Date();
  let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  let day = days[d.getDay()];
  let h = d.getHours();
  let m = d.getMinutes();

  if (h > 12) {
    h = h - 12;
  }

  if (h >= 12) {
    session = "PM";
  } else {
    session = "AM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  document.getElementById("display").innerHTML =
    day + " " + h + ":" + m + ":" + session;
}
Watch();
