const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./registration/register.schema')(sequelize, Sequelize.DataTypes);
db.workouts = require('./workouts/workouts.schema')(sequelize, Sequelize.DataTypes);

module.exports = db;