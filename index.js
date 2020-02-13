const express = require('express');
const app = express();
const cors = require('cors');
const exercise_calories = require('./routes/exercise_calories');

app.use(cors());
app.get('/api', (req, res) => {
  const url = "https://github.com/jtimwill/exercise-calorie-api";
  res.send(`See README for API use instructions: ${url}`);
});
app.use(express.json());
app.use('/api/exercise-calories', exercise_calories);


const port = 3000;
const server = app.listen(port, () => console.log(`Listening on port ${port}`));
