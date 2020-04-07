const router = require('express').Router()

const {
  getUserWorkouts,
  createUserWorkout
} = require('../controllers/workouts.controller')

router.get('/workouts', getUserWorkouts)
router.post('/workouts', createUserWorkout)

module.exports = router
