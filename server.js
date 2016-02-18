//express
//mongoose
//body-parser
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();
const port = process.env.PORT || 3000;

//routes:
const note = require('./routes/note');


app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({
  extended:false
}))

app.use(methodOverride('_method')); //allows us to override post from form
app.use(note)

//looks for '_mothod=DELETE' query parameter in form action and overwrites post, making it a DELETE request

app.get('/', (req, res) => {
  res.send('Server Running');
});




mongoose.connect('mongodb://localhost:27017/evernode', (err) => {
  if(err) throw err;
  app.listen(3000, () => {
    console.log(`Evernode server running on port: ${port}`);
  });
});
