'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = undefined;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sequelize = exports.sequelize = new _sequelize2.default(_config2.default.db.database, _config2.default.db.user, _config2.default.db.pass, _config2.default.db.options);

var db = {};

_fs2.default.readdirSync(__dirname).filter(function (file) {
  return file !== 'index.js';
}).forEach(function (file) {
  var model = sequelize.import(_path2.default.join(__dirname, file));
  db[model.name] = model;
});

db.sequelize = sequelize;
db.Sequelize = _sequelize2.default;

db.invoice.belongsTo(db.class_enum, {
  foreignKey: 'class'
});
db.invoice.belongsTo(db.currency_enum, {
  foreignKey: 'currency'
});
db.invoice.belongsTo(db.product_enum, {
  foreignKey: 'product'
});
db.invoice.belongsTo(db.revenue_type_enum, {
  foreignKey: 'revenueType'
});
db.invoice.belongsTo(db.status_enum, {
  foreignKey: 'status'
});
db.invoice.belongsTo(db.subscription_enum, {
  foreignKey: 'subscriptionType'
});
db.invoice.belongsTo(db.type_enum, {
  foreignKey: 'type'
});
db.invoice.belongsTo(db.country_enum, {
  foreignKey: 'country'
});
db.invoice.hasMany(db.income, {
  foreignKey: 'invoiceId',
  onDelete: 'cascade'
});
db.invoice.hasMany(db.deferred_balance, {
  foreignKey: 'invoiceId',
  onDelete: 'cascade'
});
db.user.hasMany(db.user_permission, {
  foreignKey: 'username',
  onDelete: 'cascade'
});

db.income.belongsTo(db.invoice, {
  foreignKey: 'invoiceId',
  onDelete: 'cascade'
});
db.income.belongsTo(db.month_enum, {
  foreignKey: 'month'
});

db.deferred_balance.belongsTo(db.invoice, {
  foreignKey: 'invoiceId',
  onDelete: 'cascade'
});
db.deferred_balance.belongsTo(db.month_enum, {
  foreignKey: 'month'
});

module.exports = db;