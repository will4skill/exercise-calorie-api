const express = require('express');
const router = express.Router();

const EXERCISES = {
  1:
  {
    name: "Weight Lifting: general",
    125: 90,
    155: 112,
    185: 133
  },
  2:
  {
    name: "Aerobics: water",
    125: 120,
    155: 149,
    185: 178
  },
  3:
  {
    name: "Stretching, Hatha Yoga",
    125: 120,
    155: 149,
    185: 178
  },
  4:
  {
    name: "Calisthenics: moderate",
    125: 135,
    155: 167,
    185: 200
  },
  5:
  {
    name: "Riders: general",
    125: 150,
    155: 186,
    185: 222
  },
  6:
  {
    name: "Aerobics: low impact",
    125: 165,
    155: 205,
    185: 244
  },
  7:
  {
    name: "Stair Step Machine: general",
    125: 180,
    155: 223,
    185: 266
  },
  8:
  {
    name: "Teaching aerobics",
    125: 180,
    155: 223,
    185: 266
  },
  9:
  {
    name: "Weight Lifting: vigorous",
    125: 180,
    155: 223,
    185: 266
  },
  10:
  {
    name: "Aerobics, Step: low impact",
    125: 210,
    155: 260,
    185: 311
  },
  11:
  {
    name: "Aerobics: high impact",
    125: 210,
    155: 260,
    185: 311
  },
  12:
  {
    name: "Bicycling, Stationary: moderate",
    125: 210,
    155: 260,
    185: 311
  },
  13:
  {
    name: "Rowing, Stationary: moderate",
    125: 210,
    155: 260,
    185: 311
  },
  14:
  {
    name: "Calisthenics: vigorous",
    125: 240,
    155: 298,
    185: 355
  },
  15:
  {
    name: "Circuit Training: general",
    125: 240,
    155: 298,
    185: 355
  },
  16:
  {
    name: "Rowing, Stationary: vigorous",
    125: 255,
    155: 316,
    185: 377
  },
  17:
  {
    name: "Elliptical Trainer: general",
    125: 270,
    155: 335,
    185: 400
  },
  18:
  {
    name: "Ski Machine: general",
    125: 285,
    155: 353,
    185: 422
  },
  19:
  {
    name: "Aerobics, Step: high impact",
    125: 300,
    155: 372,
    185: 444
  },
  20:
  {
    name: "Bicycling, Stationary: vigorous",
    125: 315,
    155: 391,
    185: 466
  }
};

router.get('/', async (req, res) => {
  res.send(EXERCISES);
});

router.get('/:id', async (req, res) => {
  res.send(EXERCISES[req.params.id]);
});

module.exports = router;
