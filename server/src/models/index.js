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


// db.invoice.belongsTo(db.class_enum, {
//   foreignKey: 'class'
// })


module.exports = db;