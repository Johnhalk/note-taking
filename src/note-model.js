(function(exports) {
    var numberid = 0
  function Note(text){
    this._text = text
    this._ID = numberid
    numberid++
  }
  Note.prototype.getText = function(){
    return this._text
  }
  exports.Note = Note;
  exports.getText = Note.getText; //Could also be this.getText;
})(this);
