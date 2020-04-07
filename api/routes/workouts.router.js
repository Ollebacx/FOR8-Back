const router = require('express').Router()

const {
  getTemplateWorkouts,
  getTemplateWorkoutById
} = require('../controllers/workouts.controller')

router.get('/', getTemplateWorkouts)
router.get('/:id', getTemplateWorkoutById)

module.exports = router
