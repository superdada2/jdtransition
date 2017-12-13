'use strict';

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('income', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    invoiceId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'invoice',
        key: 'id'
      }
    },
    amount: {
      type: DataTypes.DECIMAL(12, 5),
      allowNull: false
    },
    year: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    month: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      refereces: {
        model: 'month_enum',
        key: 'id'
      }
    }
  }, {
    tableName: 'income'
  });
};