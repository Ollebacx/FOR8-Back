const ExerciseModel = require('../models/exercises.model')
const { handleError } = require('../utils')

module.exports = {
  getAllExercises
}

function getAllExercises (req, res) {
  ExerciseModel
    .find()
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}
