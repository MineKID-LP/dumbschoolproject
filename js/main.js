import * as MM from "./musicmanager.js";

let state = "stopped";
let wrapper = document.getElementById("main");
let item = document.getElementById("template");
item.style.display = "none";

document.getElementById("play").onclick = function () {
  MM.play();
};

document.getElementById("stop").onclick = function () {
  MM.stop();
};

document.getElementById("addnote").onclick = function () {
  addnote(
    document.getElementById("note").value,
    document.getElementById("starttime").value,
    document.getElementById("duration").value
  );
};

function addnote(note, start, duration) {
  MM.addSound(note, parseFloat(start), parseFloat(duration));
  let temp = item.cloneNode();
  temp.innerHTML = item.innerHTML
    .replaceAll("NOTE", note.toString())
    .replaceAll("START", start.toString())
    .replaceAll("DURATION", duration.toString());
  temp.style.display = "block";
  wrapper.appendChild(temp);
}
