let stopTime = 0;
let startTime;
let upInterval;
let diffTime;
let oldHour;
export function start() {
    startTime = Date.now();
    upInterval = setInterval(countup, 1);
    document.getElementById("start").style.display = "none";
    document.getElementById("stop").style.display = "inline-flex";
}
export function countup() {
    let now = Date.now();
    diffTime = now - startTime + stopTime;
    console.log(diffTime);
    var diffHour = Math.floor(diffTime / (1000 * 60 * 60)); //時間に変換
    console.log(diffHour);
    var diffMinute = Math.floor(
        (diffTime - diffHour * 1000 * 60 * 60) / (1000 * 60)
    ); //分に変換
    var diffSecond = Math.floor(
        (diffTime - diffHour * 1000 * 60 * 60 - diffMinute * 1000 * 60) / 1000
    ); //秒に変換
    var diffMil = diffTime - diffHour * 1000 * 60 * 60 - diffMinute * 1000 * 60 - diffSecond * 1000;
    if (diffMinute < 10) {
        diffMinute = "0" + diffMinute;
    }
    if (diffSecond < 10) {
        diffSecond = "0" + diffSecond;
    }
    if (diffMil < 100) {
        if (diffMil < 10) {
            diffMil = "00" + diffMil;    
        } else {
        diffMil = "0" + diffMil;
        }
    }
    if (Number(diffHour) !== 0) {
        var display = diffHour + ":" + diffMinute + ":" + diffSecond;
    } else if (Number(diffHour) === 0) {
        var display = diffMinute + ":" + diffSecond;
    } else {
        alert("エラーが発生しました。\n時間の計算に失敗しました。");
        stop();
    }
    if (oldHour != display) {
    document.getElementById("displayHour").textContent = display;
    oldHour = display;
    }
    document.getElementById("displayMil").textContent = diffMil;
}
export function stop() {
    clearInterval(upInterval);
    document.getElementById("stop").style.display = "";
    document.getElementById("start").style.display = "";
    stopTime = diffTime;
}
export function clear() {
    stopTime = 0;
    startTime = Date.now();
    document.getElementById("displayHour").textContent = "00:00";
    document.getElementById("displayMil").textContent = "000";
}