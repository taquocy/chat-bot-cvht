const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/config');
const Question = require('./questionModel');
const User = require('./userModel');

const Answer = sequelize.define('Answer', {
  answer_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  question_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Question,
      key: 'question_id',
    },
  },
  answer_text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  is_correct: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  created_at: {
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
  tableName: 'Answers',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false,
});

Answer.belongsTo(Question, { foreignKey: 'question_id' });
Answer.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Answer;
