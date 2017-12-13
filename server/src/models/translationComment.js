/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('translationComment', {
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
        model: 'translation',
        key: 'id'
      }
    },
    comment: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    },
    userId: {
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
        model: 'translationComment',
        key: 'id'
      }
    }
  }, {
    tableName: 'translationComment'
  });
};