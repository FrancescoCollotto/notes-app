class NotesViews {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.mainContainerEl = document.querySelector('#main-container');
    this.button = document.querySelector('#btn');
    
    this.button.addEventListener('click', () => {
      const inputValue = document.getElementById('input-note').value;
      this.api.createNote(inputValue, (notes) => {
        this.model.setNotes(notes);
        this.displayNotes();
      })
      // this.addNewNote(inputValue)    
    });
  }

  addNewNote(inputValue) {
    this.model.addNote(inputValue);
    this.displayNotes();
    document.getElementById('input-note').value = "";
  }

  displayNotes() {
    document.querySelectorAll('.note').forEach(note => note.remove())
    const notes = this.model.getNotes()
    for(let i = 0; i < notes.length; i++) {
      const div = document.createElement('div');
      div.className = 'note';
      div.innerText = notes[i];
      this.mainContainerEl.append(div);
    }
  }


}

module.exports = NotesViews;

