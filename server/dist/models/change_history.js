'use strict';

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('change_history', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('NOW')
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'user',
        key: 'username'
      }
    },
    operationType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    invoiceId: {
      type: DataTypes.INTEGER(11),
      allownull: true
    },
    operation: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'change_history'
  });
};