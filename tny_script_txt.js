/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Carter Gebhards
   Date:09/17/2026   

*/


window.onload = function () {
   showCurrentTime();
   showCountdown();
   setInterval(showCurrentTime, 1000);
   setInterval(showCountdown, 1000);
};


function showCurrentTime() {
   var now = new Date();

   var dateText = (now.getMonth() + 1) + "/" + now.getDate() + "/" + now.getFullYear();
   var timeText = formatTime(now);

   document.getElementById("dateNow").innerHTML = dateText + "<br />" + timeText;
}


function formatTime(dateObj) {
   var hours = dateObj.getHours();
   var minutes = dateObj.getMinutes();
   var seconds = dateObj.getSeconds();
   var period = "a.m.";

   if (hours >= 12) {
      period = "p.m.";
   }

   if (hours > 12) {
      hours = hours - 12;
   }

   if (hours === 0) {
      hours = 12;
   }

   if (minutes < 10) {
      minutes = "0" + minutes;
   }

   if (seconds < 10) {
      seconds = "0" + seconds;
   }

   return hours + ":" + minutes + ":" + seconds + " " + period;
}


function showCountdown() {
   var now = new Date();
   var bashDate = new Date("January 1, " + getTargetYear(now) + " 00:00:00");

   var msRemaining = bashDate - now;

   var days = Math.floor(msRemaining / (1000 * 60 * 60 * 24));
   var hours = Math.floor((msRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((msRemaining % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((msRemaining % (1000 * 60)) / 1000);

   document.getElementById("days").innerHTML = days;
   document.getElementById("hrs").innerHTML = hours;
   document.getElementById("mins").innerHTML = minutes;
   document.getElementById("secs").innerHTML = seconds;
}


function getTargetYear(now) {
   if (now.getMonth() === 11) {
      return now.getFullYear() + 1;
   } else {
      return now.getFullYear();
   }
}
