import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import config from '../config';

export const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.pass,
  config.db.options
)


const db = {}

fs
  .readdirSync(__dirname)
  .filter((file) =>
    file !== 'index.js'
  )
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.table.hasMany(db.tableComment, {
  foreignKey: 'tableId',
  onDelete: 'cascade'
})
db.field.hasMany(db.fieldComment, {
  foreignKey: 'fieldId',
  onDelete: 'cascade'
})
db.translation.hasMany(db.translationComment, {
  foreignKey: 'translationId',
  onDelete: 'cascade'
})

db.table.hasMany(db.field, {
  foreignKey: 'tableId',
  onDelete: 'cascade'
})
db.field.hasMany(db.translation, {
  foreignKey: 'translationId',
  onDelete: 'cascade'
})
db.field.belongsTo(db.user, {
  foreignKey: 'assignedTo'
})
db.field.belongsTo(db.statusEnum, {
  as: 'jdeStatusEnum',
  foreignKey: 'jdeStatus'
})
db.field.belongsTo(db.statusEnum, {
  foreignKey: 'oracleStatus',
  as: 'oracleStatusEnum'
})

db.fieldComment.belongsTo(db.user, {
  foreignKey: 'userId'
})
db.fieldComment.hasMany(db.fieldComment, {
  foreignKey: 'replyId',
  onDelete: 'cascade'
})
db.table.belongsTo(db.statusEnum, {
  foreignKey: 'status'
})

db.table.belongsTo(db.user, {
  foreignKey: 'assignedTo'
})

db.tableComment.belongsTo(db.user, {
  foreignKey: 'userId'
})
db.tableComment.hasMany(db.tableComment, {
  foreignKey: 'replyId',
  onDelete: 'cascade'
})

db.translation.belongsTo(db.statusEnum, {
  foreignKey: 'status'
})

db.translation.belongsTo(db.dbTypeEnum, {
  foreignKey: 'dbType'
})

db.translation.belongsTo(db.user, {
  foreignKey: 'assignedTo'
})

db.translationComment.belongsTo(db.user, {
  foreignKey: 'userId'
})
db.translationComment.hasMany(db.translationComment, {
  foreignKey: 'replyId',
  onDelete: 'cascade'
})
db.table.hasMany(db.sourceTable, {
  foreignKey: 'tableId',
  onDelete: 'cascade'
})
db.sourceTable.belongsTo(db.statusEnum, {
  foreignKey: 'status'
})
db.sourceTable.belongsTo(db.dbTypeEnum, {
  foreignKey: 'dbType'
})
db.sourceTable.belongsTo(db.user, {
  foreignKey: 'assignedTo'
})





module.exports = db;