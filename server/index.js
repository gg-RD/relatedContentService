
const express = require('express');
const parser = require('body-parser');
const databaseImports = require('../database/index.js');
const searchDatabaseById = databaseImports.searchDatabaseById;
const dbSetup = databaseImports.dbSetup;
//


console.log(searchDatabaseById);
let app = express();

app.set('port', 3005);



app.use(express.static(__dirname + '/../public'));

dbSetup();


app.get('/shoes', (req, res) => {
  console.log('get shoes got pinged');
  searchDatabaseById(1, res.send.bind(res));
});

app.listen(app.get('port'), ()=> {
  console.log('connected, listening on port number 3005');
})