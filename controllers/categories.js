'use strict';

const Category = require('../models/categories')

module.exports = {

  //start here, getting access to notes, so you can
  //fill in note href in category-index.jade
  index (req, res) {
    Category.find({}, (err, categories) => {
      if (err) throw err;
      res.render('category-index', 
          {categories: categories}
      );
    }); 
  },
  newCategory (req, res) {
    res.render('category-new');
  },
  create (req, res) {
    Category.create(req.body, (err) => {
      if(err) throw err;
      res.redirect('/categories');
    });
  },
  show (req, res) {
    res.render('category-show', {
      notes: req.category.notes 
    });
  }
}

