const express = require('express');
const router = express.Router();
const User = require('../models/User');

// @route   POST api/users
// @desc    Register a user
// @access  Public

router.post('/', async (req, res) => {
  console.log("---   req", req.body)
  const { name, vestiging } = req.body; 

  try {
    console.log('--try--')
    const user = new User({ 
      name,
      vestiging
    });
    await user.save();
    
    res.status(200).json({
      message: `User with name ${name} has been saved`
  });
    
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Server Error');
  }
});

// @route   GET api/users
// @desc    Find users through input
// @access  Public

router.get('/', async (req, res) => {
  console.log("---   req", req.query)
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
