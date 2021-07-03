import {resize} from "./style";
import { start, stop, clear } from "./countup";
import { toggleTheme } from "./theme";
import { changeShareIcon } from "./device";
import { copy, tweet } from "./share";
  resize();
  window.addEventListener("resize",resize,false);
  document.getElementById("start").addEventListener("click", start, false);
  document.getElementById("stop").addEventListener("click", stop, false);
  document.getElementById("clear").addEventListener("click", clear, false);

  const isDark = window.matchMedia("(prefers-color-scheme: dark)");//ダークモード？
  if (localStorage.getItem("theme") === "dark") {
    // ローカルストレージを読み込み、テーマを反映
    toggleTheme("d");
  } else if (localStorage.getItem("theme") === "light") {
    toggleTheme("l");
  } else if (localStorage.getItem("theme") === "auto") {
    toggleTheme("a");
  } else {
    toggleTheme(isDark);
  }
  //click
  let auto = document.getElementById("sync"); //「システムに従う」ボタン
  let light = document.getElementById("light"); //「ライトモード」ボタン
  let dark = document.getElementById("dark"); //「ダークモード」ボタン
  auto.addEventListener(
    "click",
    () => {
      if (auto.checked) {
        toggleTheme("a");
      }
    },
    false
  );
  light.addEventListener(
    "click",
    () => {
      if (light.checked) {
        toggleTheme("l");
      }
    },
    false
  );
  dark.addEventListener(
    "click",
    () => {
      if (dark.checked) {
        toggleTheme("d");
      }
    },
    false
  );
  try {
    //システムのテーマが変更されたときに発動
    // Chrome & Firefox
    isDark.addEventListener("change", toggleTheme);
  } catch (e1) {
    try {
      // Safari
      isDark.addListener(toggleTheme);
    } catch (e2) {
      console.error(e2);
    }
}
changeShareIcon();
window.copy = copy;
window.tweet = tweet;