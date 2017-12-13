'use strict';

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('country_enum', {
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
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: true
    }
  }, {
    tableName: 'country_enum'
  });
};