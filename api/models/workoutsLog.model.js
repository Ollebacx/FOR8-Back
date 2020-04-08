const mongoose = require('mongoose')

const workoutLogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  workout: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'workouts'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'users'
  },
  rounds: {
    type: Number,
    required: true
  },
  exercises: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    ref: 'exercises'
  },
  created_at: {
    type: Date,
    required: false,
    default: Date.now()
  }
})

const workoutLogModel = mongoose.model('workoutsLog', workoutLogSchema)
module.exports = workoutLogModel
