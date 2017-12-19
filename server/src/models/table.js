/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('table', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
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

      defaultValue: '1',
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  }, {tableName: 'table'});
};