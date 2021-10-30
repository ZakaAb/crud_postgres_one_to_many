const {
  createTutorial,
  createComment,
  findTutorialById,
} = require('../controllers/tutorial.controller')

const router = require('express').Router()

router.post('/tutorial', createTutorial)

router.post('/tutorial/:id/comment', createComment)

router.get('/tutorial/:id', findTutorialById)

module.exports = router
