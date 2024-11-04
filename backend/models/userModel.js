const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/config'); // Nhớ đảm bảo sequelize được xuất đúng cách từ config

const User = sequelize.define('User', {
  user_id: { // Đổi 'id' thành 'user_id' để khớp với SQL
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: { // Đổi 'full_name' thành 'username' theo bảng SQL
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE, // Sử dụng DataTypes.DATE cho TIMESTAMP
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'Users', // Đảm bảo tên bảng là 'Users' như trong SQL
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

module.exports = User;
