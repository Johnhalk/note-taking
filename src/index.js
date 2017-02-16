  var list = new List()
  list.addNote("Favourite Drink: Sprite")
  list.addNote("No testing framework is so really like awesome")
  list.addNote("Thursday is a day that everyone loves.")
  var viewList = new ViewList(list)
  var controller = new Controller(viewList)
  var element = document.getElementById('app');
  controller.updateNotes(element);
  controller.urlChangeShowNote();
