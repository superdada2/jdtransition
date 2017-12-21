'use strict';

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('translation', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fieldId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'field',
        key: 'id'
      }
    },
    value: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: false
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'statusEnum',
        key: 'id'
      }
    },
    assignedTo: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('NOW')
    },
    dbType: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'dbTypeEnum',
        key: 'id'
      }
    },
    translationType: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'translation'
  });
};