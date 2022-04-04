import * as MM from "./musicmanager.js";

document.getElementById("play").onclick = function() {
     MM.play();
};

document.getElementById("stop").onclick = function() {
     MM.stop();
};
