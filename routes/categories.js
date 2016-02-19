'use strict'

const express = require('express');
const router = express.Router();

const Category = require('../models/categories');
const Note = require('../models/note');
const categoriesCtrl = require('../controllers/categories');

router.param('id', (req, res, next, id) => {
  Category
    .findById(id)
    .exec((err, category) => {
      if (err) throw err;

      req.category = category;

      Note.find({category: id}, (err, notes) => {
        if (err) throw err;
        req.category.notes = notes;
        next();
      })
    });
});

router.get('/categories', categoriesCtrl.index);
router.post('/categories', categoriesCtrl.create);
router.get('/categories/new', categoriesCtrl.newCategory);
router.get('/categories/:id', categoriesCtrl.show);

module.exports = router;
