let iconChange;
export function copy() {
  clearTimeout(iconChange);
  /*URLコピー*/
  var url = location.href.replace(location.hash, "");
  navigator.clipboard.writeText(url);
  document.getElementById("checkedIcon").style.display = "initial";
  document.getElementById("copyIcon").style.display = "none";
  iconChange = setTimeout(() => {
    document.getElementById("checkedIcon").style.display = "none";
    document.getElementById("copyIcon").style.display = "initial";
  }, 20 * 1000);
}
export function tweet() {
  // ツイート文を作成
  let base = "https://twitter.com/intent/tweet?";
  let hashtags = "やまだのタイマー,やまだけんいち";
  let text = "オープンソースのシンプルかつ軽量なストップウォッチ";
  let url;
  url =
    base +
    "text=" +
    text +
    "%0a&hashtags=" +
    hashtags +
    "&url=" +
    encodeURIComponent(location.href.replace(location.hash, ""));
  return url;
}