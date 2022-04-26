let sounds = [];
let ready = false;

MIDI.loadPlugin({
  soundfontUrl: "./js/instruments/",
  instrument: "acoustic_grand_piano",
  onsuccess: function() { start() }
});

function start() {
     MIDI.noteOn(0, 72, 1000, 0);
     MIDI.noteOn(0, 74, 1000, 0.25);
     MIDI.noteOn(0, 76, 1000, 0.5);
     ready = true;
}


function Sound(note, timing, duration) {
     this.note = note;
     this.timing = timing;
     this.duration = duration;
}

function addSound(note, timing, duration) {
     sounds.push(new Sound(note, timing, duration));
}

function play() {
     sounds.forEach((item, i) => {
          playnote(item.tone, item.timing, item.duration);
     });
}

function stop() {
     return alert("Nein")
}

function playnote(note, start) {
     MIDI.noteOn(0, note, 1000, start);
}

let MM = {
     addSound,
     play,
     Sound,
     playnote,
     stop,
     ready
};
