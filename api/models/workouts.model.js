const mongoose = require('mongoose')

const workoutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: 'users'
  },
  is_template: {
    type: Boolean,
    required: false,
    default: false
  },
  description: {
    type: String,
    required: false
  },
  rounds: {
    type: Number,
    required: false,
    default: 3
  },
  exercises: [{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'exercises'
  }],
  photo_url: {
    type: String,
    required: false
  },
  created_at: {
    type: Date,
    default: Date.now()
  }
})

const workoutModel = mongoose.model('workouts', workoutSchema)
module.exports = workoutModel
