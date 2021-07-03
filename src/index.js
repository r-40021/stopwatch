import {resize} from "./style";
import { start, stop, clear } from "./countup";
  resize();
  window.addEventListener("resize",resize,false);
  document.getElementById("start").addEventListener("click", start, false);
  document.getElementById("stop").addEventListener("click", stop, false);
  document.getElementById("clear").addEventListener("click", clear, false);