const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  vestiging: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('user', UserSchema);
