const mongoose = require('mongoose');

const GameSchema = mongoose.Schema({
  gameType: {
    type: String,
    required: true
  },
  winner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  loser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  }
});

module.exports = mongoose.model('game', GameSchema);
