const {
  createTutorial,
  createComment,
  findTutorialById,
  findCommentById,
  findAll,
} = require('../controllers/tutorial.controller')

const router = require('express').Router()

router.post('/tutorial', createTutorial)

router.post('/tutorial/:id/comment', createComment)

router.get('/tutorial/:id', findTutorialById)

router.get('/comment/:id', findCommentById)

router.get('/all', findAll)

module.exports = router
