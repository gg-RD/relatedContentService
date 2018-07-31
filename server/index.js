const express = require('express');
// const saveAll = require('../database/index.js').saveAll;

let app = express();

app.set('port', 3005);

app.use(express.static(__dirname + '/../public'));

app.post('/shoes', (req, res) => {
  console.log('post shoes got pinged')
});

app.get('/shoes', (req, res) => {
  console.log('get shoes got pinged');
  res.send('hi');
});

app.listen(app.get('port'), ()=> {
  console.log('connected, listening on port number 3005');
})

