const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

  var date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  console.log(hr + ":" + min + ":" + sec);
  let hrPosition = (hr * 360 / 12) + (min * (360 / 60 / 12));
  let minPosition = (min * 360 / 60) + (sec * (360 / 60) / 60);
  let secPosition = sec * 360 / 60;

function runClock() {

  secPosition += 6;
  minPosition += (6/60);
  hrPosition += (6/60/12);

  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval = setInterval(runClock,1000);