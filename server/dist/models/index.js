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

db.table.hasMany(db.tableComment, {
  foreignKey: 'tableId',
  onDelete: 'cascade'
});
db.field.hasMany(db.fieldComment, {
  foreignKey: 'fieldId',
  onDelete: 'cascade'
});
db.translation.hasMany(db.translationComment, {
  foreignKey: 'translationId',
  onDelete: 'cascade'
});

db.table.hasMany(db.field, {
  foreignKey: 'tableId',
  onDelete: 'cascade'
});

db.field.belongsTo(db.table, { foreignKey: 'tableId' });
db.field.hasMany(db.translation, {
  foreignKey: 'fieldId',
  onDelete: 'cascade'
});
db.field.belongsTo(db.user, { foreignKey: 'assignedTo' });
db.field.belongsTo(db.statusEnum, {
  as: 'jdeStatusEnum',
  foreignKey: 'jdeStatus'
});
db.field.belongsTo(db.statusEnum, {
  foreignKey: 'oracleStatus',
  as: 'oracleStatusEnum'
});

db.fieldComment.belongsTo(db.user, { foreignKey: 'userId' });
db.fieldComment.hasMany(db.fieldComment, {
  foreignKey: 'replyId',
  onDelete: 'cascade'
});
db.table.belongsTo(db.statusEnum, { foreignKey: 'status' });

db.table.belongsTo(db.user, { foreignKey: 'assignedTo' });

db.tableComment.belongsTo(db.user, { foreignKey: 'userId' });
db.tableComment.hasMany(db.tableComment, {
  foreignKey: 'replyId',
  onDelete: 'cascade'
});

db.translation.belongsTo(db.statusEnum, { foreignKey: 'status' });

db.translation.belongsTo(db.dbTypeEnum, { foreignKey: 'dbType' });

db.translation.belongsTo(db.user, { foreignKey: 'assignedTo' });

db.translationComment.belongsTo(db.user, { foreignKey: 'userId' });
db.translationComment.hasMany(db.translationComment, {
  foreignKey: 'replyId',
  onDelete: 'cascade'
});
db.table.hasMany(db.sourceTable, {
  foreignKey: 'tableId',
  onDelete: 'cascade'
});
db.sourceTable.belongsTo(db.statusEnum, { foreignKey: 'status' });
db.sourceTable.belongsTo(db.dbTypeEnum, { foreignKey: 'dbType' });
db.sourceTable.belongsTo(db.user, { foreignKey: 'assignedTo' });

module.exports = db;