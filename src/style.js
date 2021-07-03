export function resize() {
    const place = document.getElementById("displayTime");
    let count = document.getElementById("displayHour").textContent.length + document.getElementById("displayMin").textContent.length + document.getElementById("displaySec").textContent.length + document.getElementById("displayMil").textContent.length;
    if (count < 9) {
      count = 9;
    }
    if (window.innerWidth <= 775) {
      place.style.fontSize = 150 / count + "vmin";
    } else {
      place.style.fontSize = 185 / count + "vmin";
    }
  }