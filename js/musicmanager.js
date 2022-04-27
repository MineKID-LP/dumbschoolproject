let sounds = [];
let ready = false;

MIDI.loadPlugin({
  soundfontUrl: "./js/instruments/",
  instrument: "acoustic_grand_piano",
  onsuccess: function() { start() }
});

function start() {
     ready = true;
}


function Sound(note, timing) {
     this.note = note;
     this.timing = timing;
}

function addNote(note, timing) {
     sounds.push(new Sound(note, timing));
}

function removeNote(note, timing){
     sounds.filter(item => item != new Sound(note, timing))
}

function play() {
     sounds.forEach((item, i) => {
          playNote(item.note, item.timing)
     });
}

function stop() {
     return alert("WIP")
     //If someone tells me why some asshole with a yee yee ass hair cut decieded it would be a good idea to not document their library I'll be happy.
}

function playNote(note, start) {
     MIDI.noteOn(0, note, 1000, start);
     // MIDI.noteOff(0, note, 1.6); Why, why are you cutting the song off. Fuck that shit!
}

let MM = {
     addNote,
     sounds,
     play,
     Sound,
     removeNote,
     playNote,
     stop,
     ready,
     loadSong
};

function loadSong(json) {
     try {
          sounds = JSON.parse(json)
     } catch (e) {
          return e
     }
     return "Loaded successfully!"
}
