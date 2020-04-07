const WorkoutModel = require('../models/workouts.model')
const { handleError } = require('../utils')

module.exports = {
  getTemplateWorkouts,
  getTemplateWorkoutById
}

function getTemplateWorkouts (req, res) {
  WorkoutModel
    .find()
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function getTemplateWorkoutById (req, res) {
  WorkoutModel
    .findById(req.params.id)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}