let sounds = [];

function Sound(note, timing, duration) {
     this.note = note;
     this.timing = timing;
     this.duration = duration;
}

function addSound(note, timing, duration) {
     sounds.push(new Sound(note, timing, duration));
     sounds = sortNotes();
}

function play() {
     sounds.forEach((item, i) => {
          playnote(item.tone, item.timing, item.duration);
     });
}

function stop() {
     return alert("Nein")
}

function playnote(note, start, end) {
     MIDI.noteOn(0, note, 1000, start);
     MIDI.noteOff(0, note, end);
}

export {
     addSound,
     play,
     Sound,
     playnote,
     stop
};
