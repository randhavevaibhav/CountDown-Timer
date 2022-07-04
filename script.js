const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const currentDate = new Date();
const newYears = "1 Jan " + (currentDate.getFullYear() + 1);

function countDown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
  const sec = Math.floor((newYearsDate - currentDate) / 1000);
  const mins = Math.floor(sec / 60);
  const hours = Math.floor(mins / 60);
  const days = Math.floor(hours / 24);

  const rem_hours = 24 - currentDate.getHours();
  const rem_minutes = 60 - currentDate.getMinutes();
  const rem_sec = 60 - currentDate.getSeconds();

  console.log("Seconds " + sec);
  console.log("minutes " + mins);
  console.log("hours " + hours);
  console.log("days " + days);
  console.log("remaning hours " + rem_hours);
  console.log("remaning minutes  " + rem_minutes);
  console.log("remaning seconds  " + rem_sec);
  console.log("current year  " + currentDate.getFullYear());
  console.log("new year  " + newYears);
  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(rem_hours);
  minsEl.innerHTML = formatTime(rem_minutes);
  secondsEl.innerHTML = formatTime(rem_sec);

  function formatTime(time) {
    if (time < 10) {
      time = "0" + time;
    }
    return time;
  }
}

countDown();

setInterval(countDown, 1000);
