const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Beer = new Schema({
  beerName: {
    type: String
  },
  breweryName: {
    type: String
  },
  url: {
    type: String
  },
  review: {
    type: String
  }
},{
  collection: 'beer'
});

module.exports = mongoose.model('Beer', Beer);