function testNoteInstantiation() {
  var note = new Note("I love coding!");

  assert.isTrue(note.getText() === "I love coding!");

};
console.log("1. Has a method that will return the note text.")

testNoteInstantiation();
