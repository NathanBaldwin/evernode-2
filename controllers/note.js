'use strict';
const Note = require('../models/note');
const Category = require('../models/categories');

module.exports = {
  edit (req, res) {
    // Note.findById(req.params.id, (err, note) => {
      // if (err) throw err;
    Category.find({}, (err, categories) => {
      if (err) throw err;
      res.render('new-note', {
        note: req.note,
        categories: categories
      });
    })
    // });
  },

  update (req, res) {
    req.note.update(req.body, (err) => {
        if(err) throw err;
        res.redirect(`/notes/${req.note._id}`);
      });
    },

  index (req, res) {
    Note.find({}, (err, notes) => {
      if (err) throw err;
      res.render('notes-index', 
          {notes: notes}
        );
      }
    )},

  newNote (req, res) {
    Category.find({}, (err, categories) => {
      if (err) throw err;
      res.render('new-note', {
        note: req.note,
        categories: categories
      });   
    })
  },

  create (req, res) {
    console.log("req.body", req.body);
    Note.create(req.body, (err, note) => {
      if (err) throw err;
      res.redirect(`/notes/${note._id}`)
    })
  },

  destroy (req, res) {
    // Note.findByIdAndRemove(req.params.id, (err) => {
    //   if (err) throw err;
    //   res.redirect('/notes');
    // });
    req.note.remove((err) => {
      if (err) throw err;

      res.redirect('/notes');
    });
  },

  show (req, res) {
    // Note.findById(req.params.id, (err, note) => {
    //   if (err) throw err;
    //   console.log("note:", {note: note});
    //   res.render('show-note', {note: note});
    // })
    res.render('show-note', {note: req.note});
  }
};

