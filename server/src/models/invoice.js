/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('invoice', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    type: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'type_enum',
        key: 'id'
      }
    },
    customerName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    comments: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    country: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'country_enum',
        key: 'id'
      }
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    product: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'product_enum',
        key: 'id'
      }
    },
    class: {
      type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'class_enum',
          key: 'id'
        }
    },
    invoiceNumber: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    invoiceAmount: {
      type: DataTypes.DECIMAL(12, 5),
      allowNull: false
    },
    invoiceDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    subscriptionType: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'subscription_enum',
        key: 'id'
      }
    },
    billingMonth: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'status_enum',
        key: 'id'
      }
    },
    recognitionStartMonth: {
      type: DataTypes.DATEONLY,
      allowNull: false,

    },
    lengthMonth: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    currency: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'currency_enum',
        key: 'id'
      }
    },
    FXRate: {
      type: DataTypes.DECIMAL(12, 5),
      allowNull: false,
      defaultValue: '1'
    },
    revenueType: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'revenue_type_enum',
        key: 'id'
      }
    },
    cancellationDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    annualIncreaseEli: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    dateLastIncrease: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    increasePercentage: {
      type: DataTypes.DECIMAL(12, 5),
      alowNull: true,
      defaultValue: 0
    },
    invoiceAmountUSD: {
      type: DataTypes.DECIMAL(12, 5),
      allowNull: true
    },
    MonthlyRecoginitionAmountUSD: {
      type: DataTypes.DECIMAL(12, 5),
      allowNull: false
    }
  }, {
    tableName: 'invoice'
  });
};