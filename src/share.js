export function copy() {
    /*URLコピー*/
    var url = location.href.replace(location.hash, "");
    navigator.clipboard.writeText(url);
    alert("URLをコピーしました");
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