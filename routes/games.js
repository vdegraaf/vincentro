const express = require('express')
const router = express.Router()

// @route   POST api/games
// @desc    Get games
// @access  Public

router.post('/', (req, res) => {
  res.send('Post games')
})

router.get('/', (req, res) => {
  res.send('Get games')
})
module.exports = router