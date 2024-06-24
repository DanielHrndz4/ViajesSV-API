const mongoose = require('mongoose');

const PlaceSchema = new mongoose.Schema({
  destinationName: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  package: {
    type: String,
    required: true
  },
  suggestedPrice: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  guide: {
    type: String,
    required: true
  },
  mainImage: {
    type: String, 
    required: true  
  },
  description: {
    type: String,
    required: true  
  }
});

const Place = mongoose.model('Place', PlaceSchema);

module.exports = Place;