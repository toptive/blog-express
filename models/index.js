const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.db'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Defining models
db.posts = require('./post')(sequelize, DataTypes);

module.exports = db;
