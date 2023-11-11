const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;
// bistro_boss32
// jY8KWxhe9qzB7MSO
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome TO Restaurant');
})

app.listen(port, () => {
  console.log(`The Restaurant is Running on Port ${port}`);
})