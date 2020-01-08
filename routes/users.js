const express = require('express');
const router = express.Router();
const User = require('../models/User');

// @route   POST api/users
// @desc    Register a user
// @access  Public

router.post('/', async (req, res) => {
  
  const {name, vestiging} = req.body
  
  try {
    const user = new User({
      name,
      vestiging
    })

    await user.save()

    
  }
  catch (err) {
      console.error(err.message);
      res.status(500).json('Server Error');
    }

});

router.get('/', (req, res) => {
  res.send('Get user');
});
module.exports = router;
