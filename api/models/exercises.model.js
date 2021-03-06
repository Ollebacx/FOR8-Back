const mongoose = require('mongoose')

const exerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['HOMBROS', 'PIERNAS', 'BRAZOS', 'PECHO', 'ESPALDA', 'ABS'],
    required: false
  },
  photo_url: {
    type: String,
    required: false
  }
})

const exerciseModel = mongoose.model('exercises', exerciseSchema)
module.exports = exerciseModel
