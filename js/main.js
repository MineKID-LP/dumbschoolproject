document.getElementById("play").onclick = function() {
     //temp
     MM.addSound(document.getElementById('note').value, document.getElementById('delay').value, 1)
     MM.play();
};

// document.getElementById("stop").onclick = function() {
//      MM.stop();
// };
