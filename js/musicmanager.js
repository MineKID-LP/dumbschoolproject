let sounds = [], song = [];
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
          playnote(item.tone, item.timing);
     });
}

function stop() {
     return alert("")
}

function playNote(note, start) {
     MIDI.noteOn(0, note, 1000, start);
}

let MM = {
     addNote,
     play,
     Sound,
     removeNote,
     playNote,
     stop,
     ready
};
