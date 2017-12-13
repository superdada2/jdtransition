/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('translation', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    translationId: {
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
  }, {
    tableName: 'translation'
  });
};