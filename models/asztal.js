const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Asztal  = db.model('Asztal', {
  nev: String,
  ules: Number,

});

module.exports = Asztal;