
const express = require('express');
const parser = require('body-parser');
<<<<<<< HEAD
const databaseImports = require('../database/index.js');
const searchDatabaseById = databaseImports.searchDatabaseById;
const dbSetup = databaseImports.dbSetup;



=======
const searchDatabaseById = require('../database/index.js').searchDatabaseById;



>>>>>>> 85e4dbb24e3a0b7daceaa4777938f19e74b695b4
console.log(searchDatabaseById);
let app = express();

app.set('port', 3005);


<<<<<<< HEAD

=======
>>>>>>> 85e4dbb24e3a0b7daceaa4777938f19e74b695b4
app.use(express.static(__dirname + '/../public'));

dbSetup();


app.get('/shoes', (req, res) => {
  console.log('get shoes got pinged');
  searchDatabaseById(1, res.send.bind(res));
});

app.listen(app.get('port'), ()=> {
  console.log('connected, listening on port number 3005');
})