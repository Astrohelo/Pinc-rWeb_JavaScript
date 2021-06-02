const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Rendeles  = db.model('Rendeles', {
  nev: String,
  darab: Number,
  _asztala:{
    type: Schema.Types.ObjectId,
    ref: 'Asztal'
}
});

module.exports = Rendeles;