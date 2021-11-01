const db = require('../models')
const Tutorial = db.tutorials
const Comment = db.comments

exports.createTutorial = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
    return
  }

  const tutorial = {
    title: req.body.title,
    description: req.body.description,
  }

  Tutorial.create(tutorial)
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Tutorial.',
      })
    })
}

exports.createComment = (req, res) => {
  const comment = {
    name: req.body.name,
    text: req.body.text,
    tutorialId: req.params.id,
  }

  Comment.create(comment)
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Tutorial.',
      })
    })
}

exports.findTutorialById = (req, res) => {
  Tutorial.findByPk(req.params.id, { include: ['comments'] })
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while finding the Tutorial.',
      })
    })
}

exports.findCommentById = (req, res) => {
  Comment.findByPk(req.params.id, { include: ['tutorial'] })
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while finding the Comment.',
      })
    })
}

exports.findAll = (req, res) => {
  // Tutorial.findAll({ limit: 1, offset: 2 }).then((data) => res.send(data))
  Tutorial.findAll({ include: ['comments'] }).then((data) => res.send(data))
  // Comment.findAll({ include: ['tutorial'] }).then(data => res.send(data))
}
