const UserModel = require('../models/users.model')
const { handleError } = require('../utils')

module.exports = {
  setWorkoutToDo,
}

function setWorkoutToDo (req, res) {
  UserModel
    .updateOne({
      _id: res.locals.user._id
    }, {
      toDoWorkout: req.body.status
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}
