
const express = require('express');
const parser = require('body-parser');
const searchDatabaseById = require('../database/index.js').searchDatabaseById;



console.log(searchDatabaseById);
let app = express();

app.set('port', 3005);


app.use(express.static(__dirname + '/../public'));

app.post('/shoes', (req, res) => {
  console.log('post shoes got pinged')
});

app.get('/shoes', (req, res) => {
  console.log('get shoes got pinged');
  searchDatabaseById(1, res.send.bind(res));
});

app.listen(app.get('port'), ()=> {
  console.log('connected, listening on port number 3005');
})