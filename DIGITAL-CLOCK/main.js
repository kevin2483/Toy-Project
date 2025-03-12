const $hour = document.querySelector('.hour');
const $min = document.querySelector('.min');
const $sec = document.querySelector('.sec');

function formatTime(time) {
  return time < 10 ? `0${time}` : time; // 한 자리 숫자일 경우 앞에 0 추가
}

function clock() {
  const now = new Date();

  $hour.innerText = formatTime(now.getHours());
  $min.innerText = formatTime(now.getMinutes());
  $sec.innerText = formatTime(now.getSeconds());
}

setInterval(clock, 1000);
clock();
