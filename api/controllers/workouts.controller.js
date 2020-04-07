const WorkoutModel = require('../models/workouts.model')
const { handleError } = require('../utils')

module.exports = {
  getTemplateWorkouts,
  getTemplateWorkoutById,
  getUserWorkouts,
  createUserWorkout
}

function getTemplateWorkouts (req, res) {
  WorkoutModel.find()
    .then((response) => res.json(response))
    .catch((err) => handleError(err, res))
}

function getTemplateWorkoutById (req, res) {
  WorkoutModel.findById(req.params.id)
    .then((response) => res.json(response))
    .catch((err) => handleError(err, res))
}

function getUserWorkouts (req, res) {
  WorkoutModel
    .find({ user: res.locals.user._id })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function createUserWorkout (req, res) {
  if (req.body.is_template) {
    WorkoutModel.create({
      ...req.body,
      user: res.locals.user._id
    })
      .then(response => res.json(response))
      .catch(err => handleError(err, res))
  } else {
    WorkoutModel.create({
      user: res.locals.user._id,
      name: req.body.name,
      description: req.body.description,
      exercises: req.body.exercises
    })
      .then(response => res.json(response))
      .catch(err => handleError(err, res))
  }
}
