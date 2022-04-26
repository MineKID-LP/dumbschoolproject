let allnotes = ["A0", "Hh0", "H0", "C1", "Dh1", "D1", "Eh1", "E1", "F1", "Gh1", "G1", "Ah1", "A1", "Hh1", "H1",
  "C2", "Dh2", "D2", "Eh2", "E2", "F2", "Gh2", "G2", "Ah2", "A2", "Hh2", "H2",
  "C3", "Dh3", "D3", "Eh3", "E3", "F3", "Gh3", "G3", "Ah3", "A3", "Hh3", "H3",
  "C4", "Dh4", "D4", "Eh4", "E4", "F4", "Gh4", "G4", "Ah4", "A4", "Hh4", "H4",
  "C5", "Dh5", "D5", "Eh5", "E5", "F5", "Gh5", "G5", "Ah5", "A5", "Hh5", "H5",
  "C6", "Dh6", "D6", "Eh6", "E6", "F6", "Gh6", "G6", "Ah6", "A6", "Hh6", "H6",
  "C7", "Dh7", "D7", "Eh7", "E7", "F7", "Gh7", "G7", "Ah7", "A7", "Hh7", "H7", "C8"
];

let maxrows = 10;

for (i = -1; i < allnotes.length; i++) {
  $('#field').append(`<div class="row" id="${i + 100}"></div>`);
  if (i == -1) {
    for (let row = 0; row < maxrows; row++) {
      if (row == 0) {
        $(`#${i + 100}`).append(`<div class="cell" style="border-right: black 3px solid; border-bottom: 3px black solid">${row}</div>`)
      } else {
        $(`#${i + 100}`).append(`<div class="cell" style="width:201px; border-right: black 3px solid; border-bottom: 3px black solid">${row}</div>`)
      }
    }
  } else {
    $(`#${i + 100}`).append(`<div class="cell" style="border-right: black 3px solid; border-bottom: 3px black solid"><span id="key_${21 + i}"; class="key"; onclick="MM.playnote(parseInt(this.id.replace('key_', '')), 0, 2)">${allnotes[i]}</span></div>`);
    for (j = 0; j < (maxrows - 1) * 4; j++) { //row = maxrows * 4cells
      $(`#${100 + i}`).append(`<div class="cell" id="${"dick" + j + "mongo" + i}" onclick="anal_insert(${"dick" + j + "mongo" + i})"></div>`)
    }
  }
  $('#field').append('</div>');
}

function anal_insert(id) {
  anal_destruction({
    x: parseInt(id.id.toString().replaceAll('dick', '').split('mongo').shift()),
    y: parseInt(id.id.toString().replaceAll('dick', '').split('mongo').pop())
  });
  if (document.getElementById(id.id).style.backgroundColor != "rgb(167, 167, 167)") {
    document.getElementById(id.id).style.backgroundColor = "#a7a7a7";
  } else {
    document.getElementById(id.id).style.backgroundColor = "#ffffff";
  }
}

function anal_destruction(xy) {
  xy.y += 21;
  console.log(xy)
}