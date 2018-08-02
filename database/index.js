const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/relatedContentDB');


let shoeSchema = mongoose.Schema({
  id: Number,
  name: String,
  reviews: Array, /* reviews will hold 
  touples that have the review and raitings
  */
  description: String,
  colors: Array,
  image: String,
  relatedShoes: Array,
  price: Number,
  category: String,
});

let Shoe = mongoose.model('Shoe', shoeSchema);


let searchDatabaseById = (id, callback) => {
  let query = {'id': id};
  let arr = [];
  Shoe.findOne(query, (err, shoe)=> {
    if (err) {
      console.log(err);
    } else {
      let relatedShoes = shoe.relatedShoes.slice();
      relatedShoes.forEach((item)=> {
        query = {'id': item};
        arr.push(Shoe.findOne(query).exec());
      
      });
      Promise.all(arr).then((shoes) => {
        callback(shoes);
      });
    }
  });
  
}

module.exports.searchDatabaseById = searchDatabaseById;