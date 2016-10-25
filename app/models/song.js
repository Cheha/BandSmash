var mongoose = require('mongoose');

module.exports = mongoose.model('Song', {
  title: {
    type: String,
    default: ''
  },
  artist: {
    type: String,
    default: ''
  },
  cover: {
    type: String,
    default: ''
  },
  url: {
    type: String,
    default: ''
  },
  rating: {
    type: Number,
    default: 10.0
  }
});