(function(exports) {
  function ViewList(list){
    this._list = list
  }

  ViewList.prototype.displayList = function () {
    if (this._list._notes.length > 0){
      var string = '';
    for (var i = 0; i < this._list._notes.length; i++) {
      string += "<a href=#notes/" + this._list._notes[i]._ID + ">" + "<li><div>"+this._list._notes[i]._text.slice(0,20)+"</div></li></a>"
    }
    return "<ul>"+string+"</ul>"
  }
  else{
    return "no notes"
  }
  }

  exports.ViewList = ViewList
})(this);
