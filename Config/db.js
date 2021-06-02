const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/xyz');

module.exports = mongoose;