const WorkoutsLogModel = require('../models/workoutsLog.model')
const { handleError } = require('../utils')

module.exports = {
  getWorkoutsLog,
  getWorkoutLogById,
  createWorkoutLog
}

function getWorkoutsLog (req, res) {
  WorkoutsLogModel.find()
    .then((response) => res.json(response))
    .catch((err) => handleError(err, res))
}

function getWorkoutLogById (req, res) {
  WorkoutsLogModel.findById(req.params.id)
    .then((response) => res.json(response))
    .catch((err) => handleError(err, res))
}

function createWorkoutLog (req, res) {
  WorkoutsLogModel.create({
    name: req.body.name,
    workout: req.body._id,
    user: req.body.user,
    rounds: req.body.rounds,
    exercises: req.body.exercises
  })
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}
