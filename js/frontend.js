$('#table').append('<table>');

$("div").css({
	"border": "1px solid black"
});

let allnotes = ["A0", "Bb0", "B0", "C1", "Db1", "D1", "Eb1", "E1", "F1", "Gb1", "G1", "Ab1", "A1", "Bb1", "B1", "C2", "Db2", "D2", "Eb2", "E2", "F2", "Gb2", "G2", "Ab2", "A2", "Bb2", "B2", "C3", "Db3", "D3", "Eb3", "E3", "F3", "Gb3", "G3", "Ab3", "A3", "Bb3", "B3", "C4", "Db4", "D4", "Eb4", "E4", "F4", "Gb4", "G4", "Ab4", "A4", "Bb4", "B4", "C5", "Db5", "D5", "Eb5", "E5", "F5", "Gb5", "G5", "Ab5", "A5", "Bb5", "B5", "C6", "Db6", "D6", "Eb6", "E6", "F6", "Gb6", "G6", "Ab6", "A6", "Bb6", "B6", "C7", "Db7", "D7", "Eb7", "E7", "F7", "Gb7", "G7", "Ab7", "A7", "Bb7", "B7", "C8"];

<<<<<<< HEAD
for (let newnote of allnotes){
    newnote = newnote.replace("B", "H")
	newnote = newnote.replace("b", "h")
	console.log(newnote)
}

/*for (i = 0; i < allnotes.length; i++) {

	console.log(allnotes);

	$('#table').append(`<tr style="border: 1px solid black"><td id="note_${21 + i}">${allnotes[i]}</td></tr>`);
}*/

=======
for (let note of allnotes){
     note = note.replace("B", "H").replace("b", "h")
}

for (i = 0; i < allnotes.length; i++) {
	$('#table').append(`<tr style="border: 1px solid black"><td id="key_${21 + i}" class="key" onclick="MM.playnote(parseInt(this.id.replace('key_', '')), 0, 2)">${allnotes[i]}</td></tr>`);
}
>>>>>>> 3d4083359cb9b5ca90981ff1589a8b4f6cf45d52


$('#table').append('</table>');

"A0",   
"Hh0",
"H0",
"C1",
"Dh1",
"D1",
"Eh1",
"E1",
"F1",
"Gh1",
"G1",
"Ah1",
"A1",
"Hh1",
"H1",
"C2",
"Dh2",
"D2",
"Eh2",
"E2",
"F2",
"Gh2",
"G2",
"Ah2",
"A2",
"Hh2",
"H2",
"C3",
"Dh3",
"D3",
"Eh3",
"E3",
"F3",
"Gh3",
"G3",
"Ah3",
"A3",
"Hh3",
"H3",
"C4",
"Dh4",
"D4",
"Eh4",
"E4",
"F4",
"Gh4",
"G4",
"Ah4",
"A4",
"Hh4",
"H4",
"C5",
"Dh5",
"D5",
"Eh5",
"E5",
"F5",
"Gh5",
"G5",
"Ah5",
"A5",
"Hh5",
"H5",
"C6",
"Dh6",
"D6",
"Eh6",
"E6",
"F6",
"Gh6",
"G6",
"Ah6",
"A6",
"Hh6",
"H6",
"C7",
"Dh7",
"D7",
"Eh7",
"E7",
"F7",
"Gh7",
"G7",
"Ah7",
"A7",
"Hh7","H7","C8"
