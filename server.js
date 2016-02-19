//express
//mongoose
//body-parser
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const logger = require('./lib/logger');

const app = express();
const port = process.env.PORT || 3000;

//routes:
const Log = require('./models/log');
const noteRoutes = require('./routes/note');
const categoriesRoutes = require('./routes/categories');


app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({
  extended:false
}))

//looks for '_mothod=DELETE' query parameter in form action and overwrites post, making it a DELETE request
app.use(methodOverride('_method')); //allows us to override post from form
app.use(logger);
app.use(categoriesRoutes);

app.get('/', (req, res) => {
  res.send('Server Running');
});

app.use(noteRoutes)


mongoose.connect('mongodb://localhost:27017/evernode', (err) => {
  if(err) throw err;
  app.listen(3000, () => {
    console.log(`Evernode server running on port: ${port}`);
  });
});
