const express = require('express')
const router = express.Router()

var noteContrl = require('../controller/noteController')

router.get('/notes', noteContrl.getAllNotes)
router.post('/notes/save', noteContrl.saveNote)
router.put('/notes/update', noteContrl.updateNote)
router.delete('/notes/delete/:noteId', noteContrl.deleteNote)

module.exports = router;