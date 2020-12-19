setInterval(() => {
  date = new Date();
  hours = date.getHours();
  mins = date.getMinutes();
  seconds = date.getSeconds();

  hrot = 30 * hours + mins / 2;
  mrot = 6 * mins;
  srot = 6 * seconds;

  hour.style.transform = `rotate(${hrot}deg)`;
  minute.style.transform = `rotate(${mrot}deg)`;
  second.style.transform = `rotate(${srot}deg)`;
}, 1000);
