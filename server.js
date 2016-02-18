//express
//mongoose
//body-parser
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({
  extended:false
}))

app.get('/', (req, res) => {
  res.send('Server Running');
});

app.get('/notes/new', (req, res) => {
  res.render('new-note');
});

app.post('/notes', (req, res) => {
  console.log("req.body", req.body);
  res.send('thanks for your new note')
})

app.listen(3000, () => {
  console.log(`Evernode server running on port: ${PORT}`);
})
