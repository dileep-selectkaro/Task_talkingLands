const mongoose = require('mongoose');

const polygonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  coordinates: {
    type: {
      type: String,
      enum: ['Polygon'],
      required: true,
    },
    coordinates: {
      type: [[[Number]]],
      required: true,
    },
  },
});

module.exports = mongoose.model('Polygon', polygonSchema);

