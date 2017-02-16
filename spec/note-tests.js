function testNoteInstantiation() {
  var note = new Note("I love coding!");

  assert.isTrue(note.getText() === "I love coding!");

};
console.log("1. Has a method that will return the note text.")

testNoteInstantiation();


function testNotehasID() {
  var note = new Note("Do I have an ID?");

  assert.isTrue(note._ID === 1);
}
console.log("2. Note has unique assigned ID upon creation.")
testNotehasID();
