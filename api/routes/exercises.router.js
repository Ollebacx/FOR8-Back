const router = require('express').Router()

const {
  getAllExercises
} = require('../controllers/exercises.controller')

router.get('/', getAllExercises)

module.exports = router
