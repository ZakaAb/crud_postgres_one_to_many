const Sequelize = require('sequelize')
const comments = require('./comment.model')
const tutorials = require('./tutorial.model')

const sequelize = new Sequelize(
  'postgres://postgres:Sonelgaz.1@127.0.0.1:5432/database-one-to-many'
)

const db = {
  sequelize,
  Sequelize,
  tutorials: tutorials(sequelize, Sequelize),
  comments: comments(sequelize, Sequelize),
}

db.tutorials.hasMany(db.comments, { as: 'comments' })
db.comments.belongsTo(db.tutorials, {
  foreignKey: 'tutorialId',
  as: 'tutorial',
})

module.exports = db
