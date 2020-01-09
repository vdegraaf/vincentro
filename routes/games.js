const express = require('express')
const router = express.Router()
const Game = require('../models/Game')

// @route   POST api/games
// @desc    Get games
// @access  Public

router.post('/', async (req, res) => {
  const { gameType, winner, loser } = req.body;
  
  try {
    const game = new Game({
      gameType,
      winner,
      loser
    });
    await game.save();
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Server Error');
  }
})

router.get('/', (req, res) => {
  res.send('Get games')
})
module.exports = router