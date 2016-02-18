const express = require('express');
const router = express.Router();
const Note = require('../models/note')

router.get('/notes/new', (req, res) => {
  res.render('new-note');
});

router.get('/notes/:id', (req, res) => {
  Note.findById(req.params.id, (err, note) => {
    if (err) throw err;
    console.log("note:", {note: note});
    res.render('show-note', {note: note});
  })
})

router.post('/notes', (req, res) => {
  console.log("req.body", req.body);
  Note.create(req.body, (err, note) => {
    if (err) throw err;
    res.redirect(`/notes/${note._id}`)
  })
});

module.exports = router;
