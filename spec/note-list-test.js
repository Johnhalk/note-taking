function testNewList() {
  var list = new List();

  assert.isTrue(list.showNotes.length === 0);

};
console.log("3. Has a method that will return the list of notes.")
testNewList();


function testAddNote(){
  var list = new List();
  list.addNote("No test framework is really cool.")

  assert.isTrue(list.showNotes()[0].getText() === "No test framework is really cool.");
};
console.log("4. Checks that you can create and store notes in the notelist")
testAddNote();
