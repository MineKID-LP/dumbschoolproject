let allnotes = ["A0", "Hh0", "H0", "C1", "Dh1", "D1", "Eh1", "E1", "F1", "Gh1", "G1", "Ah1", "A1", "Hh1", "H1",
  "C2", "Dh2", "D2", "Eh2", "E2", "F2", "Gh2", "G2", "Ah2", "A2", "Hh2", "H2",
  "C3", "Dh3", "D3", "Eh3", "E3", "F3", "Gh3", "G3", "Ah3", "A3", "Hh3", "H3",
  "C4", "Dh4", "D4", "Eh4", "E4", "F4", "Gh4", "G4", "Ah4", "A4", "Hh4", "H4",
  "C5", "Dh5", "D5", "Eh5", "E5", "F5", "Gh5", "G5", "Ah5", "A5", "Hh5", "H5",
  "C6", "Dh6", "D6", "Eh6", "E6", "F6", "Gh6", "G6", "Ah6", "A6", "Hh6", "H6",
  "C7", "Dh7", "D7", "Eh7", "E7", "F7", "Gh7", "G7", "Ah7", "A7", "Hh7", "H7", "C8"
];

for (i = -1; i < allnotes.length; i++) {
  $('#field').append(`<div id="${i}">`);
  if (i == -1) {
    for (let row = 0; row < 2; row++) {
      $(`#${i}`).append(`<div id="cell">${row}</div>`)
    }
  } else {
    for (let j = 0; j < 1; j++) {
      if (j == 0) {
        $(`#${i}`).append(`<div style="border: 1px solid black"; id="key_${21 + i}"; class="key"; onclick="MM.playnote(parseInt(this.id.replace('key_', '')), 0, 2)">${allnotes[i]}</div>`);
      } else {
        for (k = 0; k < 4; k++) {
          $(`#${i}`).append(`<div id="cell"></div>`)
        }
      }
    }
  }
  $('#field').append('</div>')
}

/*for (rows = 0; rows < 10; rows++) {
  $('#table').append(` < span id = "row" > $ {
      rows
    }
    `);
  if (rows == 0) {
    for (i = 0; i < allnotes.length; i++) {
      $('#row').append(` < div style = "border: 1px solid black" > < td id = "key_${21 + i}"
    class = "key"
    onclick = "MM.playnote(parseInt(this.id.replace('key_', '')), 0, 2)" > $ {
      allnotes[i]
    } < /div>`);
  }
} else {
  $('#row').append(`<div id="cell"></div>`);
}
$('#table').append('</span>');
}*/