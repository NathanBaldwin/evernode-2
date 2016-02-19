'use strict'
const express = require('express');
const router = express.Router();

const Note = require('../models/note');
const note = require('../controllers/note');


router.param('id', (req, res, next, id) => {
  //any time a query or route param is present, it fires this callback:
  Note
    .findById(id)
    .populate('category')
    .exec((err, note) => { //need exec if chaning methods
      if(err) throw err;
      //this also adds methods onto the object, such as update, remove, etc
      //that enable you to update and remove from the object
      req.note = note;
      next(); //tells it to keep moving down the waterfall;
  })
})

router.get('/notes/new', note.newNote);
router.get('/notes/:id', note.show);
router.get('/notes', note.index);
//forms don't  have a delete method
//need method-override module to do this (middleware in server.js)
router.delete('/notes/:id', note.destroy);
router.get('/notes/:id/edit', note.edit);
router.put('/notes/:id', note.update);
router.post('/notes', note.create);

module.exports = router;
