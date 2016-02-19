'use strict'

const mongoose = require('mongoose');
const Log = require('../models/log');

module.exports = (req, res, next) => {
  //log req to db
  Log.create({
    userAgent: req.headers['user-agent'],
    route: req.url,
    verb: req.method
  }, next);
}
