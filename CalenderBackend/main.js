const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

//body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', require('./api')); // include our routes!

app.use('/', (req, res, next) => {
  res.send('Junk')
})

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

const db = require('./db')

db.sync()
  .then(function(){
    app.listen(3000)
    console.log("Server listening on port 3000");
})


module.exports = app;
