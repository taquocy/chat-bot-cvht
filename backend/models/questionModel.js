const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/config');
const User = require('./userModel');

const Question = sequelize.define('Question', {
  question_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  question_text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'user_id',
    },
  },
}, {
  tableName: 'Questions',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

Question.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Question;
