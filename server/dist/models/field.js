'use strict';

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('field', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tableId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'table',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: false
    },
    jdeStatus: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'statusEnum',
        key: 'id'
      }
    },
    oracleStatus: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'statusEnum',
        key: 'id'
      }
    },
    assignedTo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1',
      references: {
        model: 'user',
        key: 'id'
      }
    }
  }, { tableName: 'field' });
};