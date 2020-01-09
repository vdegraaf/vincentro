const express = require('express');
const router = express.Router();
const Game = require('../models/Game');
const User = require('../models/User');

// @route   POST api/games
// @desc    Save finished game
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
});

// @route   GET api/games
// @desc    Get games through input
// @access  Public

router.get('/', async (req, res) => {
  // Input can optionally be:
  // gameType
  // userId

  try {
    const games = await Game.find()
      .find({
        gameType: 'Cricket',
        $or: [
          { winner: '5e16e1941abb1324330e0d6c' },
          { loser: '5e16e1941abb1324330e0d6c' }
        ]
      })
      .populate('winner')
      .populate('loser');

    res.send(games);
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Server Error');
  }
});

module.exports = router;
