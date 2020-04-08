const router = require('express').Router()

const authRouter = require('./auth.router')
const exercisesRouter = require('./exercises.router')
const workoutsRouter = require('./workouts.router')
const meRouter = require('./me.router')
const userRouter = require('./users.router')

const { authUser } = require('../utils') // Authenticated Route

router.use('/auth', authRouter)

router.use('/exercises', exercisesRouter)
router.use('/workouts', workoutsRouter)
router.use('/me', authUser, meRouter)
router.use('/user', authUser, userRouter)

// router.get('/whoami', authUser, (req, res) => {
//   res.send(`hi there! ${res.locals.user.name}`)
// })

module.exports = router
