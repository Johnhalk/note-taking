function testViewListInstantiation() {
  var list = new List();
  var viewList = new ViewList(list);

  assert.isTrue(viewList._list === list);
}
testViewListInstantiation();

function testEmptyHtmlList() {
  var list = new List();
  var viewList = new ViewList(list);

  assert.isTrue(viewList.displayList() === "no notes" )
}
testEmptyHtmlList();

function testOneNoteInHtmlList() {
  var list = new List();
  list.addNote("Hello my name is Elder Price")
  var viewList = new ViewList(list);
  assert.isTrue(viewList.displayList() === "<ul><li><div>Hello my name is Eld</div></li></ul>")
}
testOneNoteInHtmlList();

function testMultipleNoteInHtmlList() {
  var list = new List();
  list.addNote("Hello my name is Elder Price")
  list.addNote("Howdy my name is Dylan")
  var viewList = new ViewList(list);
  assert.isTrue(viewList.displayList() === "<ul><li><div>Hello my name is Eld</div></li><li><div>Howdy my name is Dyl</div></li></ul>" )
}
testMultipleNoteInHtmlList();
