const router = require('express').Router()

const {
  getUserWorkouts,
  createUserWorkout
} = require('../controllers/workouts.controller')

router.get('/workouts', getUserWorkouts)
router.post('/workouts', createUserWorkout)

const {
  getWorkoutsLog,
  getWorkoutLogById,
  createWorkoutLog
} = require('../controllers/workoutsLog.controller')
router.get('/workoutsLog', getWorkoutsLog)
router.get('/workoutsLog/:id', getWorkoutLogById)
router.post('/workoutsLog', createWorkoutLog)

module.exports = router
