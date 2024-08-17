const generator = require('../Util/generator')
const memStorge = require('../Util/memory.storage')
const model = require('../model/node.model')



exports.getAllNotes = (req, res) => {
  // var seqId = generator.generate();
  // memStorge.store.setItem(seqId, "1st_key")
  // var seqId_2 = generator.generate();
  // memStorge.store.setItem(seqId_2, "2nd_key")


  // var keys = memStorge.getKeys(memStorge.store)
  var values = memStorge.getValues(memStorge.store)
  console.log('values............' + JSON.stringify(values));
  return res.status(200).send(JSON.stringify(values));

}

exports.saveNote = (req, res) => {
  var seqId = generator.generate();
  var createdBy = 'admin';
  var createdOn = new Date().toDateString();
  var title = req.body.title;
  var content = req.body.content;



  if (!title || !content) {
    return res.status(500).send({ error: "Title and Content shouldn't be empty ⛔" })
  }
  // req.body
  var Note = model.Note;
  var noteObject = new Note(seqId, title, content, createdBy, createdOn);
  // save in memory storge 
  memStorge.store.setItem(seqId, noteObject)
  return res.status(201).send('Succssufully note saved  ✅');
}


exports.updateNote = (req, res) => {

  var createdBy = 'admin';
  var createdOn = new Date().toDateString();
  var noteId = req.body.noteId;
  var title = req.body.title;
  var content = req.body.content;

  if (!noteId) {
    return res.status(500).send({ error: "noteId shouldn't be empty ⛔" })
  }
  if (!title || !content) {
    return res.status(500).send({ error: "Title and Content shouldn't be empty ⛔" })
  }
  const noteItem = memStorge.store.getItem(noteId);
  if (!noteItem) {
    return res.status(500).send({ error: "noteId is not exist ⛔" });
  }

  var Note = model.Note;
  var noteObject = new Note(noteId, title, content, createdBy, createdOn);
  // save in memory storge 
  memStorge.store.setItem(noteId, noteObject)
  return res.status(200).send('Succssufully note Updated 👍');

}

exports.deleteNote = (req, res) => {
  const noteId = req.params.noteId;


  const noteItem = memStorge.store.getItem(noteId);
  //validate not empty
  if (!noteId) {
    return res.status(500).send({ error: "can't Delete empty noteId ❌" })
  }
  // validate is already exists
  if (!noteItem) {
    return res.status(500).send({ error: "noteId is not exist ❌" });
  }
  // If the note exists, delete it
  memStorge.store.removeItem(noteId);
  return res.status(200).send('Succssufully note Deleted 👍');
}