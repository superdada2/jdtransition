'use strict';

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('user_permission', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: false,
      references: {
        model: 'user',
        key: 'username'
      }
    },
    module: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      unique: false
    },
    role: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      unique: false
    }
  }, {
    tableName: 'user_permission'
  });
};