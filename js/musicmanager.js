let sounds = [];

function Sound(tone, timing, duration) {
     this.tone = tone;
     this.timing = timing;
     this.duration = duration;
}

function addSound(tone, timing, duration) {
     sounds.push(new Sound(tone, timing, duration));
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
     return false //GO AWAY
     var frequency = Note.fromLatin(note).frequency();
     var context = new AudioContext();
     var oscillator = context.createOscillator();
     var gain = context.createGain();

     oscillator.frequency.value = frequency;

     //Types: sine square triangle sawtooth
     oscillator.type = "sine";

     oscillator.connect(gain); //WTF is that shi*
     gain.connect(context.destination); //What does that mean

     oscillator.start(start);
     oscillator.stop(end + start);
}

export {
     addSound,
     play,
     Sound,
     playnote,
     stop
};
