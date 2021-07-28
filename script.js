// let timeDisplay = new Date();
// document.getElementById('time').innerHTML = timeDisplay.toLocaleTimeString();

// function loadTime() {
//     let currentTime = new Date();
//     let h = currentTime.getHours();
//     let m = currentTime.getMinutes();
//     let s = currentTime.getSeconds();
//     if (h == 24) {
//         h = 0;
//     } else if (h > 12) {
//         h = h - 0;
//     }
//     if (h < 10) {
//         h = "0" + h;
//     }
//     if (m < 10) {
//         m = "0" + m;
//     }
//     if (s < 0) {
//         s = "0" + s;
//     }
//     let displayTime = document.getElementById('time');
//     displayTime.textContent = "" + h + ":" + m + ":" + s;
//     displayTime.innerHTML = "" + h + ":" + m + ":" + s;

//     setTimeout("loadTime()", 1000);
//     // document.getElementById("time").innerHTML = document.lastModified;
// }
// loadTime();