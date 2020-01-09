const express = require('express');
const router = express.Router();
const User = require('../models/User');

// @route   POST api/users
// @desc    Register a user
// @access  Public

router.post('/', async (req, res) => {
  const { name, vestiging } = req.body;

  try {
    const user = new User({
      name,
      vestiging
    });
    await user.save();
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Server Error');
  }
});

// @route   GET api/users
// @desc    Find users through input
// @access  Public

router.get('/', async (req, res) => {
  // Search with field input
  const searchInput = req.query.name;
  
  try {
    let users = await User.find({ name: { $regex: `.*${searchInput}.*` } });
    res.send(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Server Error');
  }
});

module.exports = router;
