//express
//mongoose
//body-parser
const express = require('express');
const mongoose = require('mongoose');
//const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Server Running');
})

app.listen(3000, () => {
  console.log(`Evernode server running on port: ${PORT}`);
})
