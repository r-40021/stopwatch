function resize() {
    const place = document.getElementById("displayTime");
    let count = document.getElementById("displayHour").textContent.length + document.getElementById("displayMin").textContent.length + document.getElementById("displaySec").textContent.length;
    if (count < 7) {
      count = 7;
    }
    if (window.innerWidth <= 775) {
      place.style.fontSize = 150 / count + "vmin";
    } else {
      place.style.fontSize = 185 / count + "vmin";
    }
  }
  resize();