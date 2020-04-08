const router = require('express').Router()

const {
  setWorkoutToDo

} = require('../controllers/users.controller')

router.put('/', setWorkoutToDo)
// router.delete('/', deleteWorkoutToDo)

module.exports = router
