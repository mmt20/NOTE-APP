exports.Note = class Note {

  constructor(noteId, title, content, creatorBy, createdOn) {
    this.noteId = noteId;
    this.title = title;
    this.content = content;
    this.creatorBy = creatorBy;
    this.createdOn = createdOn;
  }
}