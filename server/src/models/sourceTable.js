/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('sourceTable', {
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
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'statusEnum',
        key: 'id'
      }
    },
    dbType: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'dbTypeEnum',
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
    }
  }, {
    tableName: 'sourceTable'
  });
};