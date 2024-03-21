// 1st way to code to display clock -

// let Hour = document.getElementById('hour')
// let Min = document.getElementById('min')
// let Sec = document.getElementById('sec')

// setInterval(() => {
//     let currentTime = new Date();
//     Hour.innerHTML =  (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
//     Min.innerHTML =  (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
//     Sec.innerHTML =  (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
// }, 1000)
// console.log(currentTime.getHours());

//2nd way to display the time
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
