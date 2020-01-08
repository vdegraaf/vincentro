const express = require('express')
const router = express.Router()

// @route   POST api/users
// @desc    Register a user
// @access  Public

router.post('/', (req, res) => {
  res.send('Register a user')
})

router.get('/', (req, res) => {
  res.send('Get user')
})
module.exports = router