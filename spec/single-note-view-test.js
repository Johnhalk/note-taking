function testSingleNoteView () {

  var note = new Note("Favourite Drink: Sprite")
  var singleNoteView = new SingleNoteView(note)
  assert.isTrue(singleNoteView.displaySingleNote() ==="<div>Favourite Drink: Sprite</div>");

};
console.log("11. Returns a string of HTML that represents a single note view.")
testSingleNoteView();
