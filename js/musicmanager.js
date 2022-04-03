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

function stop(){
  return alert("Nein")
}

function playnote(note, start, end) {
  return false                                    //GO AWAY
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

function sortNotes() {
  //bubblesort
  for (var i = 1; i < sounds.length; i++) {
    if (sounds[i].timing < sounds[0].timing) {
      sounds.unshift(sounds.splice(i, 1)[0]);
    } else if (sounds[i].timing > sounds[i - 1].timing) {
      continue;
    } else {
      for (var j = 1; j < i; j++) {
        if (
          sounds[i].timing > sounds[j - 1].timing &&
          sounds[i].timing < sounds[j].timing
        ) {
          sounds.splice(j, 0, sounds.splice(i, 1)[0]);
        }
      }
    }
  }
  return sounds;
}

export { addSound, play, Sound, playnote, stop };
