function testViewListInstantiation() {
  var list = new List();
  var viewList = new ViewList(list);

  assert.isTrue(viewList._list === list);
}
console.log("5. Creates a view list that instantiates with a note view.")
testViewListInstantiation();

function testEmptyHtmlList() {
  var list = new List();
  var viewList = new ViewList(list);

  assert.isTrue(viewList.displayList() === "no notes" )
}
console.log("6. Has a method that will return no notes if a view list is created with no notes.")
testEmptyHtmlList();

function testOneNoteInHtmlList() {
  var list = new List();
  list.addNote("Hello my name is Elder Price")
  var viewList = new ViewList(list);
  assert.isTrue(viewList.displayList() === "<ul><li><div>Hello my name is Eld</div></li></ul>")
}
console.log("7. Has a method that will return one string of HTML that represents the note list model.")
testOneNoteInHtmlList();

function testMultipleNoteInHtmlList() {
  var list = new List();
  list.addNote("Hello my name is Elder Price")
  list.addNote("Howdy my name is Dylan")
  var viewList = new ViewList(list);
  assert.isTrue(viewList.displayList() === "<ul><li><div>Hello my name is Eld</div></li><li><div>Howdy my name is Dyl</div></li></ul>" )
}
console.log("8. Has a method that will return two strings of HTML that represents the note list model.")

testMultipleNoteInHtmlList();
