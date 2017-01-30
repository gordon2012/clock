function updateTime(e) {
  const now = new Date();

  const seconds =  now.getSeconds();
  const secDeg = (((seconds / 60) * 360) + 90);
  document.querySelector('.seconds').style.transform = `rotate(${secDeg}deg)`;

  const minutes = now.getMinutes();
  const minDeg = minutes / 60 * 360 + 90;
  document.querySelector('.minutes').style.transform = `rotate(${minDeg}deg)`;

  const hour = now.getHours();
  const hourDeg = hour / 24 * 360 + 90;
  document.querySelector('.hour').style.transform = `rotate(${hourDeg}deg)`;

  // console.log(`${hour}:${minutes}:${seconds} | ${hourDeg} ${minDeg} ${secDeg}`);
}

updateTime();
window.setInterval(updateTime, 1000);
