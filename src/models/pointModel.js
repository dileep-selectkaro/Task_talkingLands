const mongoose = require('mongoose');

const pointSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
});

pointSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Point', pointSchema);