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
    .then((response) => {
      const templateWorkouts = []
      response.forEach(workout => { if (workout.is_template === true) { templateWorkouts.push(workout) } })
      res.json(templateWorkouts)
    })
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
    .populate('exercises')
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function createUserWorkout (req, res) {
  WorkoutModel.create({
    user: res.locals.user._id,
    name: req.body.name,
    description: req.body.description,
    exercises: req.body.exercises
  })
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}
