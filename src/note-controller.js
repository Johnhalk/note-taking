(function(exports) {
    function Controller(viewList){
        this._viewList = viewList;
    };

    Controller.prototype.updateNotes = function(element) {
        element.innerHTML = this._viewList.displayList();
    };

    Controller.prototype.newNoteSubmit = function(){
    var noteInput = document.getElementById("text");

    document.querySelector('form.note-form').addEventListener('submit',function(e){
      e.preventDefault();
      console.log(noteInput.value);
    });
    };

    Controller.prototype.urlChangeShowNote = function(){
      window.addEventListener("hashchange", showNoteForCurrentHash);
    };

    function showNoteForCurrentHash(){
      showNote(getNotefromUrl(window.location));
    };

    function getNotefromUrl(location) {
      return location.hash.split("#notes/")[1];
    };

    function showNote(noteId) {
      document.getElementById("singlenote").innerHTML = list.showNotes()[noteId]._text;
    }
    exports.Controller = Controller;
})(this);
