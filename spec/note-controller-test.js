function testNoteControllerInstantiates() {

  function ListDouble() {};
  ListDouble.prototype = {
    addNote: function() {}
  };
  function ViewListDouble(ListDouble) {};

  ViewListDouble.prototype = {
    displayList: function() {
      return "<ul><li><div>Favourite Drink: Sprite</div></li></ul>";
    }
  }

  var list = new ListDouble()
  var viewList = new ViewListDouble(list)
  var controller = new Controller(viewList)
  assert.isTrue(controller._viewList === viewList);
};
console.log("9. Tests that controller note instantiates with a view list.")
testNoteControllerInstantiates()

function testNoteControllerUpdateNotes() {
  function ListDouble() {};
  ListDouble.prototype = {
    addNote: function() {}
  };
  function ViewListDouble(ListDouble) {};

  ViewListDouble.prototype = {
    displayList: function() {
      return "<ul><a href=#notes/7><li><div>Favourite Drink: Sprite</div></li></a></ul>";
    }
  }

  var listDouble = new ListDouble()
  listDouble.addNote("Favourite Drink: Sprite")
  var viewListDouble = new ViewListDouble(listDouble)
  var controller = new Controller(viewListDouble)
  var element = document.getElementById('app');
  controller.updateNotes(element);
  assert.isTrue(element.innerHTML === "<ul><a href=\"#notes/7\"><li><div>Favourite Drink: Sprite</div></li></a></ul>");
}
console.log("10.The app element contains notes as HTML string.")
testNoteControllerUpdateNotes()
