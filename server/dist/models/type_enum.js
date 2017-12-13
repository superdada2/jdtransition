'use strict';

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('type_enum', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    data: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    }
  }, {
    tableName: 'type_enum'
  });
};