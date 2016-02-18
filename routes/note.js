const express = require('express');
const router = express.Router();

const note = require('../controllers/note');

router.get('/notes/new', note.newNote);
router.get('/notes/:id', note.show);
router.get('/notes', note.index);
//forms don't  have a delete method
//need method-override module to do this (middleware in server.js)
router.delete('/notes/:id', note.destroy);
router.post('/notes', note.create);

module.exports = router;
