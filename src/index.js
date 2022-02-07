import {resize} from "./style";
import { start, stop, clear, isCountFunc } from "./countup";
import { toggleTheme } from "./theme";
import { changeShareIcon } from "./device";
import { copy, tweet, shareAPI } from "./share";
import NoSleep from 'nosleep.js';
import { modalTrigger, modalClose } from "./modal";
import "./style.scss"

  resize();
  let myEventType;
  if( window.ontouchstart !== undefined && 0 < navigator.maxTouchPoints ) {
    myEventType = "touchstart";
  } else {
    myEventType = "mousedown";
  }
  window.addEventListener("resize",resize,false);
  document.getElementById("start").addEventListener(myEventType, start, false);
  document.getElementById("stop").addEventListener(myEventType, stop, false);
  document.getElementById("clear").addEventListener(myEventType, clear, false);

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
var noSleep = new NoSleep();
  // Enable wake lock.
  // (must be wrapped in a user input event handler e.g. a mouse or touch handler)
  let eventType;
  if (window.ontouchstart) {
    eventType = "touchstart";
  } else {
    eventType = "click";
  }
  let eventTime = 0;
  document.body.addEventListener(eventType, enableNoSleep, false);
  function enableNoSleep() {
    if (eventTime <= 10) {
      noSleep.disable();
      noSleep.enable();
    } else {
      document.removeEventListener(eventType, enableNoSleep, false);
    }
    eventTime++;
  }
  window.addEventListener("keydown",(e)=>{
    if (!e.repeat) {
      if (e.code === "Space" || e.key === "Enter") {
        if (isCountFunc()) {
          stop();
        } else {
          start();
        }
        
      } else if (e.key === "c") {
        clear();
      }
    }
  })
modalTrigger();
modalClose();
shareAPI();

window.copy = copy;
window.tweet = tweet;