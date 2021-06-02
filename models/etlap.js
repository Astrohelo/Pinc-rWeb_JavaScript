const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Etlap  = db.model('Etlap', {
  nev: String
});

module.exports = Etlap;