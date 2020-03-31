const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  vestiging: {
    type: String,
    required: true
  },
  gamesLost: {
    type: Number,
    default: 0
  },
  gamesWon: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('user', UserSchema);
