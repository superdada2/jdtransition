/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('tableComment', {
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
    comment: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    },
    user: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
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
    replyId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'tableComment',
        key: 'id'
      }
    }
  }, {
    tableName: 'tableComment'
  });
};