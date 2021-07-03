export function resize() {
    const place = document.getElementById("displayTime");
    let count = document.getElementById("displayHour").textContent.length + document.getElementById("displaySmall").textContent.length;
    if (count < 10) {
      count = 10;
    }
    if (window.innerWidth <= 775) {
      place.style.fontSize = 210 / count + "vmin";
    } else {
      place.style.fontSize = 230 / count + "vmin";
    }
  }