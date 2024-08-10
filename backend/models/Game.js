const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Game data - table columns
const Game = sequelize.define('Game', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  isFavorite: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
});

module.exports = Game;
