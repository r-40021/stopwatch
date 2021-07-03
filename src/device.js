export function changeShareIcon(){
    const userAgent = window.navigator.userAgent.toLowerCase();
    /*Androidのときに「共有」アイコンを変化*/
    var shareElements = document.getElementById("arrowUp");
    var AndroidElements = document.getElementById("shareAndroid");
    if (
      userAgent.indexOf("android") !== -1 ||
      (userAgent.indexOf("linux") !== -1 && "ontouchstart" in document)
    ) {
      shareElements.remove();
      AndroidElements.style.display = "initial";
    } else {
        AndroidElements.remove();
    }
}